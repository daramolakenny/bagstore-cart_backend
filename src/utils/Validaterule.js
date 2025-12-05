
export const validateProduct = {
    productName: {
        isLength: {
            Option: {
                min: 4,
                max: 15,
            },
            errorMessage: "Product name must be between 3 chars and 15 chars",
        },
    },
    image: {
        errorMessage: "Image is require for the users",
    },
    price: {
        errorMessage: "Price is required",
    },
    category: {
        errorMessage: "category is required",
    }
};

    // login
export const validationSchema = {
    email: {
        isLength: {
            Option: {
                min: 5,
                max: 30,
            },
            errorMessage: "username is required and must be min of 3 chars and max 30 chars",
        },
    },
    password: {
        errorMessage: "password is required",
    }
};

    // signup
export const validateSignupSchema = {
    userName: {
        isLength: {
            Option: {
                min: 5,
                max: 30
            },
            errorMessage: "must be atleast 5 and max of 30 character",
        }
    },
    email: {
        errorMessage: "must be an email with @ character",
    },
    password: {
        isLength: {
            Option: {
                min: 8,
                max: 15,
            },
            errorMessage: "must contain number, special character and capital alphabet",
        }
    },
    contact: {
        errorMessage: "must be number not string"
    },
};