/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Control } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { Input } from "@/components/ui/input"
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { ImagePlus } from "lucide-react";

import type { FC } from 'react';

interface ImageUploaderProps {
    control: Control<any>
     name: string
}

const ImageUploader: FC<ImageUploaderProps> = ({ control , name}) => {

    const [preview, setPreview] = React.useState<string | ArrayBuffer | null>("");

    const onDrop = React.useCallback(
        (acceptedFiles: File[]) => {
            const reader = new FileReader();
            try {
                reader.onload = () => setPreview(reader.result);
                reader.readAsDataURL(acceptedFiles[0]);
                // form.setValue("image", acceptedFiles[0]);
                // form.clearErrors("image");
            } catch (error) {
                setPreview(null);
                // form.resetField("image");
            }
        },
        // [form],
        []
    );

    const { getRootProps, getInputProps, isDragActive, fileRejections } =
        useDropzone({
            onDrop,
            maxFiles: 1,
            maxSize: 1000000,
            accept: { "image/png": [], "image/jpg": [], "image/jpeg": [] },
        });

    return (

        <FormField
            control={control}
            name={name}
            render={() => (
                <FormItem className="">
                    <FormLabel
                        className={`${fileRejections.length !== 0 && "text-destructive"}`}
                    >
                        <h2 className="text-lg">
                            Upload image
                            <span
                                // className={
                                //     form.formState.errors.image || fileRejections.length !== 0
                                //         ? "text-destructive"
                                //         : "text-muted-foreground"
                                // }
                            ></span>
                        </h2>
                    </FormLabel>
                    <FormControl>
                        <div
                            {...getRootProps()}
                            className="mx-auto flex cursor-pointer flex-col items-center justify-center gap-y-2 rounded-lg p-8 "
                        >
                            {preview && (
                                <img
                                    src={preview as string}
                                    alt="Uploaded image"
                                    className="max-h-[400px] rounded-lg"
                                />
                            )}
                            <ImagePlus
                                className={`size-20 ${preview ? "hidden" : "block"}`}
                            />
                            <Input {...getInputProps()} type="file" />
                            {isDragActive ? (
                                <p>Drop the image!</p>
                            ) : (
                                <p>Click here or drag an image to upload it</p>
                            )}
                        </div>
                    </FormControl>
                    <FormMessage>
                        {fileRejections.length !== 0 && (
                            <p>
                                Image must be less than 1MB and of type png, jpg, or jpeg
                            </p>
                        )}
                    </FormMessage>
                </FormItem>
            )}
        />
    );
};

export default ImageUploader;