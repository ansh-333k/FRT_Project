# FRT_Project
Microsoft Future Ready Talent Project
# Trawell

Trawell is a website that allows users to explore different tourist places in India. It provides information about famous tourist destinations, including their names, locations, descriptions, images, ratings, and the best time to visit each place.

## [Live Preview](https://tra-well.azurewebsites.net)

[![Trawell Preview](./pictures/welcoming-page.png)]
[![Trawell Preview](./pictures/welcoming-page.png)]
[![Trawell Preview](./pictures/welcoming-page.png)]

## Features

- Categorized Places: Explore various tourist places in India, organized into different categories.
- Detailed Information: Each place provides comprehensive details such as name, location, description, rating, and the best time to visit.
- Get an idea about the beauty of the place with beautiful images provided for each destination.
- Interactive Interface: Enjoy a user-friendly interface that enhances the browsing experience.

## Installation

To run the Trawell website locally, follow these steps:

1. Install Python & Git on System
2. git clone https://github.com/ansh-333k/FRT_Project.git
3. Open the parent folder of “app.py” (i.e. FRT_Project) file in the Linux Terminal
4. pip install virtualenv (To Install Python Virtual Environment Library)
5. virtualenv venv (To Create Virtual Environment)
6. source ./venv/bin/activate (To Activate Virtual Environment)
7. pip install -r requirements.txt (To Install All the Required Python Libraries in One Go)
8. python app.py (To Run Application)
9. Access the running website from any browser at: https://127.0.0.1/5000
10. Additional Information
- Ctrl + C (To Stop the Running Application)
- deactivate (To Shut Down the Virtual Environment)

## Usage

Once the website is running, you can:

- Browse different categories of tourist places.
- Click on a place to view its detailed information, including name, location, description, images, rating, and best time to visit.

## Documentation

1. To fetch List of All Categories with their Images
   - URL: https://tra-well.azurewebsites.net/india
   - Method: GET
   - Response: List of Objects
   - Object: {
                    "name": "Religious Places",
                    "image": "https://trawell.blob.core.windows.net/img/Religious%20Places.jpg"
                 }

2. To fetch List of Places for a Given Category
   - URL: https://tra-well.azurewebsites.net/india/<string:category>
   - Method: GET
   - Response: List of Objects
   - Object: {
                    "name": "Varanasi",
                    "location": "Uttar Pradesh",
                    "rating": 4.5,
                    "best_time": "October to March",
                    "caption": "The Spiritual Capital of India",
                    "img1": "https://trawell.blob.core.windows.net/img/Varanasi/1.jpg",
                    "img2": "https://trawell.blob.core.windows.net/img/Varanasi/2.jpg",
                    "img3": "https://trawell.blob.core.windows.net/img/Varanasi/3.jpg",
                    "img4": "https://trawell.blob.core.windows.net/img/Varanasi/4.jpg",
                    "img5": "https://trawell.blob.core.windows.net/img/Varanasi/5.jpg",
                    "img6": "https://trawell.blob.core.windows.net/img/Varanasi/6.jpg",
                    "description": "World's oldest living city, Varanasi - also known as Kashi (City of Life) and Benaras, is the spiritual capital of India. It is one of Hinduism's seven holy cities. The old city of Varanasi lies along the western banks of the Ganges, spread across a labyrinth of narrow galis. Be prepared to walk on foot and encounter some holy cows! Temples at almost every turn engulf Varanasi but the Kashi Vishwanath Temple is the most visited and the oldest of the lot. Benaras is known as the city of Lord Shiva for a reason, and rightfully so.\r\nVaranasi is considered an auspicious place to die, as it is believed to grant moksha or liberation from the cycle of life and death. Spiritually enlightening, the heart of the city pulsates around the ghats, about 80 of which border the Ganges. Be prepared for the sights, sounds and smells! Don't miss out on the hot chaat and cool lassi. Though, all chaos and noise on the ghats take a pause before dusk when the Ganga Aarti begins to take place, a ceremony of immense grandeur.\r\nThis divine city is also an important destination for Buddhists. Gautam Buddha preached his first sermon in Benaras, a part which is now in Sarnath."
                 }
   - Example: https://tra-well.azurewebsites.net/india/Religious%20Places
    (%20 is used to represent a single space)


## Contributing

Contributions to Trawell are welcome! If you would like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push your changes to the branch: `git push origin my-feature-branch`
5. Submit a pull request detailing your changes and their benefits.

## License

The Trawell project is licensed under the [MIT License](link-to-license). You are free to modify and distribute the project as per the terms of the license.

