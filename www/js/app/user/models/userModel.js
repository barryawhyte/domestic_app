/**
 *
 * User Model
 *
 * id
 * user_type
 * password
 * email
 * address
 *
 */
domapp.service("userModel", [function() {

    this.user = {
        "id": null,
        "user_type": null,
        "password": null,
        "email": null,
        "address": null
    };

}]);