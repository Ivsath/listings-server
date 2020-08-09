import { NextFunction, Request, Response } from 'express';

import { listings } from '../_data/listings';
import asyncHandler from '../middleware/async';
import ErrorResponse from '../utils/errorResponse';

// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
export const getResources = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // const bootcamps = await Bootcamp.find();

    // res
    //   .status(200)
    //   .json({ success: true, count: bootcamps.length, data: bootcamps });
    res.status(200).json({ success: true, data: listings });
  },
);

// @desc      Create new bootcamp
// @route     POST /api/v1/bootcamps
// @access    Public
export const createResource = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // const bootcamp = await Bootcamp.create(req.body);

    // res.status(201).json({ success: true, data: bootcamp });
    res.status(200).json({ success: true, data: {} });
  },
);

// @desc      Get a single bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    Public
export const getResource = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // const bootcamp = await Bootcamp.findById(req.params.id);

    // if (!bootcamp)
    //   return next(
    //     new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404),
    //   );

    // res.status(200).json({ success: true, data: bootcamp });
    res.status(200).json({ success: true, data: {} });
  },
);

// @desc      Update bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Public
export const updateResource = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });

    // if (!bootcamp)
    //   return next(
    //     new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404),
    //   );

    // res.status(200).json({ success: true, data: bootcamp });
    res.status(200).json({ success: true, data: {} });
  },
);

// @desc      Delete bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Public
export const deleteResource = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    // if (!bootcamp)
    //   return next(
    //     new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404),
    //   );

    // res.status(200).json({ success: true, data: {} });
    res.status(200).json({ success: true, data: {} });
  },
);
