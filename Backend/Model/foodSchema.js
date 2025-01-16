const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    Menu: {
        VegetarianDishes: {
            PaneerTikka: {
                Description: "Marinated paneer cubes grilled to perfection, served with mint chutney",
                Price: 250,
                Ingredients: "Paneer, yogurt, spices, bell peppers, onions",
                Rating: 4.5,
                Quantity: 200,
                Quality: "Freshly made with high-quality ingredients"
            },
            DalMakhani: {
                Description: "Creamy lentils cooked with onions, tomatoes, and spices",
                Price: 150,
                Ingredients: "Lentils, onions, tomatoes, spices",
                Rating: 4.7,
                Quantity: 300,
                Quality: "Rich and flavorful, made with traditional methods"
            },
            AlooGobi: {
                Description: "Potatoes and cauliflower cooked with onions, tomatoes, and spices",
                Price: 120,
                Ingredients: "Potatoes, cauliflower, onions, tomatoes, spices",
                Rating: 4.3,
                Quantity: 250,
                Quality: "Homemade taste with fresh vegetables"
            },
            ChanaMasala: {
                Description: "Chickpeas cooked with onions, tomatoes, and spices",
                Price: 100,
                Ingredients: "Chickpeas, onions, tomatoes, spices",
                Rating: 4.0,
                Quantity: 200,
                Quality: "Authentic flavors with a hint of spice"
            },
            PalakPaneer: {
                Description: "Paneer cooked with spinach and spices",
                Price: 150,
                Ingredients: "Paneer, spinach, spices",
                Rating: 4.6,
                Quantity: 250,
                Quality: "Smooth and rich, made with fresh spinach"
            },
            CholeBhature: {
                Description: "Chickpeas cooked with onions, tomatoes, and spices",
                Price: 100,
                Ingredients: "Chickpeas, onions, tomatoes, spices",
                Rating: 4.0,
                Quantity: 200,
                Quality: "Freshly made with high-quality ingredients"
            },
            VegetableBiryani: {
                Description: "Aromatic rice cooked with mixed vegetables and spices",
                Price: 120,
                Ingredients: "Rice, mixed vegetables, spices",
                Rating: 4.3,
                Quantity: 250,
                Quality: "Fragrant and flavorful, served with raita"
            },
            MethiThepla: {
                Description: "Fluffy bread stuffed with fenugreek leaves and spices",
                Price: 80,
                Ingredients: "Flour, fenugreek leaves, spices",
                Rating: 4.1,
                Quantity: 150,
                Quality: "Soft and delicious, perfect for breakfast"
            },
            BainganBharta: {
                Description: "Grilled eggplant cooked with onions, tomatoes, and spices",
                Price: 100,
                Ingredients: "Eggplant, onions, tomatoes, spices",
                Rating: 4.0,
                Quantity: 200,
                Quality: "Smoky flavor with a rich texture"
            },
            PyaazKachori: {
                Description: "Deep-fried pastry filled with onions and spices",
                Price: 50,
                Ingredients: "Flour, onions, spices",
                Rating: 3.8,
                Quantity: 100,
                Quality: "Freshly made with high-quality ingredients"
            },
            Dhokla: {
                Description: "Soft and spongy steamed cake made from chickpea flour",
                Price: 60,
                Ingredients: "Chickpea flour, spices",
                Rating: 4.2,
                Quantity: 150,
                Quality: "Light and fluffy, served with green chutney"
            },
            PavBhaji: {
                Description: "A popular street food in India, consisting of a spicy vegetable curry served with bread",
                Price: 100,
                Ingredients: "Bread, vegetables, spices",
                Rating: 4.5,
                Quantity: 200,
                Quality: "Street-style taste, freshly made"
            }
        },
        NonVegetarianDishes: {
            ChickenTikka: {
                Description: "Marinated chicken pieces grilled to perfection, served with mint chutney",
                Price: 300,
                Ingredients: "Chicken, yogurt, spices, bell peppers, onions",
                Rating: 4.8,
                Quantity: 200,
                Quality: "Freshly made with high-quality ingredients"
            },
            ButterChicken: {
                Description: "Creamy chicken cooked with onions, tomatoes, and spices",
                Price: 250,
                Ingredients: "Chicken, onions, tomatoes, spices",
                Rating: 4.7,
                Quantity: 300,
                Quality: "Rich and indulgent, a must-try"
            },
            ChickenBiryani: {
                Description: "Aromatic rice cooked with chicken and spices",
                Price: 150,
                Ingredients: "Rice, chicken, spices",
                Rating: 4.5,
                Quantity: 200,
                Quality: "Aromatic and flavorful, served with raita"
            },
            TandooriChicken: {
                Description: "Chicken marinated in yogurt and spices, then grilled to perfection",
                Price: 200,
                Ingredients: "Chicken, yogurt, spices",
                Rating: 4.6,
                   Quantity: 250,
                Quality: "Smoky and juicy, served with mint chutney"
            },
            FishCurry: {
                Description: "Fish cooked with onions, tomatoes, and spices",
                Price: 150,
                Ingredients: "Fish, onions, tomatoes, spices",
                Rating: 4.5,
                Quantity: 200,
                Quality: "Fresh and zesty, perfect for seafood lovers"
            }   
        },
        Desserts: {
            GulabJamun: {
                Description: "Soft and spongy fried dough balls soaked in sugar syrup",
                Price: 50,
                Ingredients: "Flour, sugar, spices",
                Rating: 4.0,
                Quantity: 100,
                Quality: "Sweet and indulgent, a perfect end to a meal"
            },
            Rasgulla: {
                Description: "Soft and spongy sweet dessert made from cottage cheese",
                Price: 60,
                Ingredients: "Cottage cheese, sugar, spices",
                Rating: 4.2,
                Quantity: 150,
                Quality: "Freshly made with high-quality ingredients"
            },
            Rasmalai: {
                Description: "Soft and spongy sweet dessert made from cottage cheese",
                Price: 60,
                Ingredients: "Cottage cheese, sugar, spices",
                Rating: 4.2,
                Quantity: 150,
                Quality: "Creamy and rich, a delightful treat"
            },
            Jalebi: {
                Description: "Deep-fried pastry filled with onions and spices",
                Price: 50,
                Ingredients: "Flour, onions, spices",
                Rating: 3.8,
                Quantity: 100,
                Quality: "Crispy and sweet, a popular street food"
            },
            GajarHalwa: {
                Description: "Sweet dessert made from carrots",
                Price: 70,
                Ingredients: "Carrots, sugar, spices",
                Rating: 4.3,
                Quantity: 150,
                Quality: "Freshly made with high-quality ingredients"
            },
            KajuKatli: {
                Description: "Sweet dessert made from cashews",
                Price: 80,
                Ingredients: "Cashews, sugar, spices",
                Rating: 4.4,
                Quantity: 150,
                Quality: "Freshly made with high-quality ingredients"
            },
            Kheer: {
                Description: "Sweet dessert made from rice",
                Price: 70,
                Ingredients: "Rice, sugar, spices",
                Rating: 4.3,
                Quantity: 150,
                Quality: "Smooth and comforting, a classic dessert"
            },
            IceCream: {
                Description: "Cold and creamy dessert",
                Price: 50,
                Ingredients: "Milk, sugar, spices",
                Rating: 4.9,
                Quantity: 100,
                Quality: "Freshly made with high-quality ingredients"
            }
        }
    },
    AboutUs: {
        RestaurantName: "Spice Symphony",
        ChefName: "Krish",
        Date: "January 16, 2025"
    }
});

const foodModel = mongoose.model("foodModel", foodSchema);
module.exports = foodModel;