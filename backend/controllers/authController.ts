import {Request, Response} from 'express';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User';


export const registerUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, password, role } = req.body;

    // Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).json({
        message: 'User already exists',
      });

      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({
      message: 'User registered successfully',
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error,
    });
  }
};
export const loginUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Check user exists
    const user = await User.findOne({ email });

    console.log(user);

    if (!user) {
      res.status(400).json({
        message: 'Invalid credentials',
      });

      return;
    }

    // Compare password
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      res.status(400).json({
        message: 'Invalid credentials',
      });

      return;
    }

    // Generate token
   const token = jwt.sign(
  {
    id: user._id.toString(),
    role: user.role,
  },
  process.env.JWT_SECRET || 'mysecretkey',
  {
    expiresIn: '1d' as const,
  }
);

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: 'Server Error',
      error,
    });
  }
};

export const getUsers = async (
  req: Request,
  res: Response
): Promise<void> => {

  try {

    const users = await User.find();

    res.status(200).json(users);

  } catch (error) {

    res.status(500).json({
      message: 'Server Error',
    });
  }
};