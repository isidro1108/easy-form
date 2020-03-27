var model = {
    users: [],
    dates: {
        name: document.querySelector('#name'),
        lastName: document.querySelector('#last-name'),
        email: document.querySelector('#email'),
        password: document.querySelector('#password'),
        otherPassword: document.querySelector('#password-repeat')
    },
    passwordsAreSame: function() {
        return this.dates.password.value === this.dates.otherPassword.value
    },
    fieldsAreComplete: function() {
        let test = 0
        let fields = ['name', 'lastName', 'email', 'password', 'otherPassword']
        for (let field of fields) {
            if (this.dates[field].checkValidity()) {
                test++
            }
        }
        return test === fields.length
    },
    datesOfUser: function() {
        return {
            name: this.dates.name.value,
            lastName: this.dates.lastName.value,
            email: this.dates.email.value,
            password: this.dates.password.value
        }
    }
}

var controller = {
    saveDates: function() {
        if (model.passwordsAreSame()) {
            if (model.fieldsAreComplete()) {
                model.users.push(model.datesOfUser())
            } else {
                alert('Los campos no cumplen con los requisitos!')
            }
        } else {
            alert('Las contraseñas no coinciden!')
        }
    },
    init: function() {
        view.init()
    }
}

var view = {
    button: document.querySelector('#submit'),
    init: function() {
        this.button.addEventListener('click', function() {
            controller.saveDates()
        })
    }
}

controller.init()