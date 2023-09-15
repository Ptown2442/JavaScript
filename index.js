const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to mongo...', err));

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 5, maxlength: 255}, 
    author: { type: String, required: true }, 
    tags: {
        type: Array, 
        validate: {
            validator: function(v) {
                return v.length > 0;
            }, 
            message: 'A course should have a tag.'
        }
    }, 
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    catagory: {
        type: String, 
        required: true, 
        enum: ['web', 'mobile', 'network']
    }
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse(){
    const course = new Course({
        name: 'Porter Course3', 
        author: 'Porter', 
        tags: ['Total Infusion', 'Fullstack'], 
        isPublished: true, 
        catagory: 'web'
    });
    
    try {
        await course.validate();

        // that above or this for auto validate
        // const result = await course.save();
        // console.log(result);

    }
    catch (ex) {
        console.log(ex.message);
    }
}

async function getCourses() {
    const courses = await Course
    .find({ author: 'Mosh', isPublished: true })
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1});
    console.log(courses);
}

async function removeCourse(id) {
    const result = await Course.deleteOne({ _id: id });
    console.log(result);
}

createCourse();