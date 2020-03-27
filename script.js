var model = {
    users: [],
    fields: ['name', 'lastName', 'email', 'password', 'otherPassword'],
    data: {
        name: document.querySelector('#name'),
        lastName: document.querySelector('#last-name'),
        email: document.querySelector('#email'),
        password: document.querySelector('#password'),
        otherPassword: document.querySelector('#password-repeat')
    },
    passwordsAreSame: function() {
        return this.data.password.value === this.data.otherPassword.value
    },
    fieldsAreComplete: function() {
        let test = 0
        for (let field of this.fields) {
            if (this.data[field].checkValidity()) {
                test++
            }
        }
        return test === this.fields.length
    },
    dataOfUser: function() {
        return {
            name: this.data.name.value,
            lastName: this.data.lastName.value,
            email: this.data.email.value,
            password: this.data.password.value
        }
    },
    cleanFields: function() {
        for (let field of this.fields) {
            this.data[field].value = ''
        }
    }
}

var controller = {
    saveData: function() {
        if (model.passwordsAreSame()) {
            if (model.fieldsAreComplete()) {
                let data = model.dataOfUser()
                model.users.push(data)
                model.cleanFields()
                alert('Gracias por registrarte ' + data.name + '!!')
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
            controller.saveData()
        })
    }
}

controller.init()