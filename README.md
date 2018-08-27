# ShopsApp

This application lists shops nearby and prefered shops for each user.

## Frontend part
Make sure you have the Angular CLI installed globally

### Technologies used
•	Angular 4 - The code is written in TypeScript, which compiles to JavaScript.

### Development server
Run `ng serve --open` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
### The general page breakdown looks like this:
•	Home page : List of shops
•	List of preferred shops for each user
•	Sign in/Sign up pages 

## Backend part
flask RESR api application.
### Technologies used
•	Python3 - A programming language that lets you work more quickly (The universe loves speed!).
•	Flask - A microframework for Python based on Werkzeug, Jinja 2 and good intentions
•	Virtualenv - A tool to create isolated virtual environments
•	Minor dependencies can be found in the requirements.txt file on shopsAppBackend folder.

### Installation / Usage
•	If you wish to run your own build, first ensure you have python3 globally installed in your computer.
•	After this, ensure you have installed virtualenv globally as well. If not, run this:
```
$ pip install virtualenv
```
• Create a virtual environment:
```
python -m venv venv
```
• Activate the virtual environment on windows:
```
venv\Scripts\activate
```

Install your requirements in venv:
```
(venv)$ pip install -r requirements.txt
```

### Running It
On your terminal, run the server using this one simple command:
```
(venv)$ python run_API.py
```
You can now access the app on your local browser by using but make sure that your database server is running
```
http://localhost:5002/shops
```

## Batabase part

### Technologies used
•	MongoDB – MongoDB offers many advantages over others.

### Prepare your database

Create a mongodb database and name it 'shopsAppDB'
Create the 'users' collection 
Download this folder : dump-shops/shops 

Import .bson file format on mongodb :

```
mongorestore --drop -d shopsAppDB -c shops /path/to/file/shops.bson
```




