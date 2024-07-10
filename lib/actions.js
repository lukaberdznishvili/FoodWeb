"use server";

import { redirect } from 'next/navigation';
import { saveMeals } from './meals';

export async function shareMeal(formData) {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: `/image/${formData.get('image')}`,
        creator: formData.get('name'),
        creator_email: formData.get('email')
    };
    await saveMeals(meal);

    redirect('/meals');
};