# ArabCar – images/ folder

Place all car images and brand assets in this folder.

## Required Files

| File                      | Description                              |
|---------------------------|------------------------------------------|
| logo.png (or .svg)        | ArabCar logo (transparent background)    |
| hero-car.png              | Full-width hero background car image     |
| placeholder.jpg           | Fallback image if a car photo is missing |
| bmw-m440.jpg              | BMW M440 Coupe                           |
| vw-troc.jpg               | VW T-Roc                                 |
| bmw-x3.jpg                | BMW X3 30                                |
| bmw-520.jpg               | BMW 520                                  |
| mercedes-amg-gt63s.jpg    | Mercedes-AMG GT 63 S                     |
| tesla-model3.jpg          | Tesla Model 3                            |

## Adding More Cars
1. Save the image here (e.g. `audi-q7.jpg`)
2. In `index.html`, duplicate a `.car-card` block
3. Update `data-category`, `data-price`, `data-name`
4. Update the `<img src="images/audi-q7.jpg">` and alt text
5. Update the price, specs, and total fields

## Recommended Image Specs
- Size: 800 × 450 px minimum (16:9 ratio)
- Format: JPG (quality 80) or WebP for smaller file size
- Background: dark or transparent for best look on the dark theme

## Placeholder
If `placeholder.jpg` doesn't exist, the grey card background shows.
Create a simple 800×450 dark grey JPG and save as `placeholder.jpg`.
