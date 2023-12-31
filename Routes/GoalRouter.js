const express = require('express');
const router = express.Router();
const {
    getAllGoals,
    getSingleGoal,
    createGoal,
    updateGoal,
    deleteGoal
} = require('../Controllers/GoalController')

router.route('/').get(getAllGoals).post(createGoal)
router.route('/:goalId').get(getSingleGoal).patch(updateGoal).delete(deleteGoal)

module.exports = router;