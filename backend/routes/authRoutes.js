import express from 'express';

const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', logout)
router.post('/reset-password', reset-password)
router.post('/getMe', getMe)