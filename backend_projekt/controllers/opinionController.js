const Opinion = require('./../models/opinionModel');
const User = require('./../models/userModel');

exports.getAllOpinions = async (req, res) => {

    try {
        const opinions = await Opinion.find();

        res.status(200).json({
            status: 'success',
            results: opinions.length,
            data: {
                opinions
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
    
};

exports.getOpinion = async (req, res) => {
    
    try {
        const opinion = await Opinion.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                opinion
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.getOpinionAuthor = async (req, res) => {
    try {
        const opinion = await Opinion.findById(req.params.id);
        const author = await User.findById(opinion.params.owner);

        res.status(200).json({
            status: 'success',
            data: {
                author
            }
        });

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

exports.createOpinion = async (req, res) => {

    try {
        const newOpinion = await Opinion.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                opinion: newOpinion
            }
        });
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: 'Invalid data sent!'
        });
    }    
};

exports.updateOpinion = async (req, res) => {
    try {
        const opinion = await Opinion.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: 'success',
            data: {
                opinion
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};

exports.deleteOpinion = async (req, res) => {
    try {
        await Opinion.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }    
};