# Fugitive Pursuit

The frontend of the app is designed using Reactjs and Tailwind CSS for styling.

The UI is completely user friendly and responsive.

The backend of the app is designed using Node, Expressjs frameworks for seamless routing.

In the backend, stored the cities and vehicles in the form of array of objects.

# Flow

The cops selects the city from the list of cities to find the criminal independently from the select options.

Cops cannot select the city which was selected by others to maintain uniquiness.

Cops can select the type of vehicle, if the vehicle is not suitable for the selected city cops will get an
alert to choose other vehicles

After cops selects their cities and vehicles anyone can search for the criminal.

During this time we get one random city from the backend, if city does not matches with  the cities selected by cops
they get alert that criminal not found in selected cities.

Else after some time they get winner in the modal and criminal, city in which he is hiding on the UI.

# API's

/api/city/get-city - to get the radom city in which criminal hiding

/api/cop/is-suitable-vehicle -  checks whether selected vehicle by cop is suitable for round trip or not

/api/city/add-city - api to add city to list oc cites

/api/city/update-city - to update existing city

/api/city/delete-city - to delete existing city

/api/city/get-cities - to get list of cities



Home Page: ![image](https://github.com/Vyshnavi-vk/Yocket-Assignment/assets/116080577/7046a6a2-ebcf-42ff-b730-40e94258593c)

Result page: ![image](https://github.com/Vyshnavi-vk/Yocket-Assignment/assets/116080577/31526226-b0e6-4909-8c92-f376ab6a452e)

![image](https://github.com/Vyshnavi-vk/Yocket-Assignment/assets/116080577/a85a3587-1ea1-4370-8050-c3b4001f25ce)






