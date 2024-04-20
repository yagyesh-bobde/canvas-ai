import io
import base64

from google.cloud import vision

project_id = ""

client = vision.ImageAnnotatorClient(client_options={'api_endpoint':''})

def process_image(image):
    with open(image  , "rb") as image_file:
        content = image_file.read()
    return content

def analyze_image(image_content):
    image = vision.types.Image(content=base64.b64encode(image_content).decode("utf-8"))

    features = [vision.Feature(type_=vision.Feature.Type.IMAGE_PROPERTIES)]
    response = client.annotate_image(image=image , features=features)

    dominant_colors = response.image_properties.dominant_colors
    textures = []
    
    return dominant_colors , textures

def generate_description(dominant_colors, textures):
  description = "The image is dominated by colors like "
  for color in dominant_colors:
    description += f"{color.color.red / 255:.2f},{color.color.green / 255:.2f},{color.color.blue / 255:.2f}, "
  description = description[:-2] + " and has textures like " + ", ".join(textures)
  return description

# Example usage (assuming you have a preprocessed image)
image_content = process_image("")
dominant_colors, textures = analyze_image(image_content)
description = generate_description(dominant_colors, textures)
print(description)
