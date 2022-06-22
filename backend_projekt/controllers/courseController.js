const Course = require('./../models/courseModel');

exports.getAllCourses = (req, res) => {
    res.status(200).json({
        status: 'success',
        // results: courses.length,
        // data: {
        //     courses
        // }
    });
};

exports.getCourse = (req, res) => {
    console.log(req.params);
    const id = req.params.id * 1;
    const course = courses.find(el => el.id === id);
    
    // if (!course)
    // {
    //     return res.status(404).json({
    //         status: 'fail',
    //         message: 'Invalid ID'
    //     });
    // }
    
    // res.status(200).json({
    //     status: 'success',
    //     data: {
    //         course
    //     }
    // });
};

exports.createCourse = (req, res) => {
    res.status(201).json({
        status: 'success',
        // data: {
        //     course: newCourse
        // }
    });
};

exports.updateCourse = (req, res) => {
    if (req.params.id * 1 > courses.length)
    {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    
    res.status(200).json({
        status: 'success',
        data: {
            course: 'Updated course here'
        }
    });
};

exports.deleteCourse = (req, res) => {
    if (req.params.id * 1 > courses.length)
    {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    
    res.status(204).json({
        status: 'success',
        data: null
    });
};