import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date.now() + 10 * 60 * 1000,
    age: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    bmi: {
        type: Number,
    },
    activityLevel: {
        type: String,
        enum: [
            'sedentary',
            'lightly active',
            'moderately active',
            'very active',
            'super active',
        ],
    },
    calorieToMaitain: {
        type: Number,
    },
    badges: {
        type: String,
    },
    workoutPreferences: {
        bodyParts: {
            type: [String],
            enum: [
                'abdominals',
                'hamstrings',
                'adductors',
                'quadriceps',
                'biceps',
                'shoulders',
                'chest',
                'middle back',
                'calves',
                'glutes',
                'lower back',
                'lats',
                'triceps',
                'traps',
                'forearms',
                'neck',
                'abductors',
            ],
        },
        category: {
            type: [String],
            enum: [
                'strength',
                'stretching',
                'plyometrics',
                'strongman',
                'powerlifting',
                'cardio',
                'olympic weightlifting',
            ],
        },
        equipment: {
            type: [String],
            enum: [
                'body only',
                'machine',
                'other',
                'foam roll',
                'kettlebells',
                'dumbbell',
                'cable',
                'barbell',
                'bands',
                'medicine ball',
                'exercise ball',
                'e-z curl bar',
            ],
        },
        level: {
            type: String,
            enum: ['beginner', 'intermediate', 'advanced'],
        }
    },
    dietPreferences: {
        healthGoals: {
            type: [String],
            enum: ['weight loss', 'weight gain', 'muscle gain', 'maintenance'],
        },
        dietStyle: {
            type: [String],
            enum: ['Dairy', 'Carbohydrate', 'Fat', 'Sugar', 'Fruit', 'Junk Food',
                'Protein', 'Vegetable'],
        },
        allergies: {
            type: [String],
            enum: ['Dairy', 'Carbohydrate', 'Fat', 'Sugar', 'Fruit', 'Junk Food',
                'Protein', 'Vegetable'],
        },
        mealPerDay: {
            type: Number,
            enum: [2, 3, 4]
        },

    },
},{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

export default User;
