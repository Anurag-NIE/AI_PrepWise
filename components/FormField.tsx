import React from 'react'
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Controller, Field, FieldValue, Path, Control } from 'react-hook-form';

interface FormFieldProps<T extends FieldValue> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;   // Optional placeholder
    type?: 'text' | 'email' | 'password' | 'file' ; // Default type is 'text'
}

const FormField = ({ control, name, label, placeholder, type
= "text" }: FormFieldProps<T>) => (
    <Controller
        control={control}
        name={name}
        render={({ field }) => (
            <FormItem>
                <FormLabel className="label">{label}</FormLabel>
                <FormControl>
                    <Input
                        className="input"
                        placeholder={placeholder}
                        type={type}
                        {...field}
                    />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
    />
);

export default FormField
