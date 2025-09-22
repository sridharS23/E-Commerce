import { zodResolver } from "@hookform/resolvers/zod"
import { Box, Button, Grid2, Paper, Typography } from "@mui/material"
import { LoadingButton } from "@mui/lab"
import { useEffect } from "react"
import { useForm, type FieldValues } from "react-hook-form"
import type { Product } from "../../App/Models/Products"
import {  createProductSchema, type CreateProductSchema } from "../../lib/schemas/createProductschema"
import { useFetchFiltersQuery } from "../catalog/catalogAPI"
import AppTextInput from "../../App/shared/components/AppTextInput"
import AppSelectInput from "../../App/shared/components/AppSelectInput"
import AppDropzone from "../../App/shared/components/AppDropzone"
import { handleApiError } from "../../lib/util"
import { useCreateProductMutation, useUpdateProductMutation } from "./adminApi"

type Props = {
    setEditMode: (value: boolean) => void
    product: Product | null
    refetch: () => void
    setSelectedProduct: (value: Product | null) => void;
}

export default function ProductForm({setEditMode, product, refetch, setSelectedProduct}: Props) {
    const {control, handleSubmit, watch, reset, setError, formState: {isSubmitting}} = useForm<CreateProductSchema>({
        mode: 'onTouched',
        resolver: zodResolver(createProductSchema) as any,
    })
    const watchFile = watch('file') as (File & { preview: string }) | undefined;
    const {data} = useFetchFiltersQuery();
    const [createProduct] = useCreateProductMutation();
    const [updateProduct] = useUpdateProductMutation();

    useEffect(() => {
        if (product) reset(product);

        return () => {
            if (watchFile) URL.revokeObjectURL(watchFile.preview)
        }
    }, [product, reset, watchFile]);

    const createFormData = (items: FieldValues) => {
        const formData = new FormData();
        for (const key in items) {
            formData.append(key, items[key])
        }

        return formData;
    }

    const onSubmit = async (data: CreateProductSchema) => {
        try {
            const formData = createFormData(data);

            if (watchFile) formData.append('file', watchFile);

            if (product) await updateProduct({id: product.id, data: formData}).unwrap();
            else await createProduct(formData).unwrap();
            setEditMode(false);
            setSelectedProduct(null);
            refetch();
        } catch (error) {
            console.log(error);
            handleApiError<CreateProductSchema>(error, setError, 
                ['brand', 'description', 'file', 'name', 'pictureUrl', 
                'price', 'quantityInStock', 'type']);
        }
    }

    return (
        <Box component={Paper} sx={{p: 4, maxWidth: 'lg', mx: 'auto'}}>
            <Typography variant="h4" sx={{mb: 4}}>
                Product details
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid2 container spacing={3}>
                    <Grid2 size={12}>
                        <AppTextInput control={control} name="name" label='Product name' />
                    </Grid2>
                    <Grid2 size={6}>
                        {data?.brands &&
                        <AppSelectInput 
                            items={data.brands}
                            control={control} 
                            name="brand" 
                            label='Brand' />}
                    </Grid2>
                    <Grid2 size={6}>
                    {data?.brands &&
                        <AppSelectInput 
                            items={data.types}
                            control={control} 
                            name="type" 
                            label='Type' />}
                    </Grid2>
                    <Grid2 size={6}>
                        <AppTextInput type="number" control={control} name="price" 
                            label='Price in cents' />
                    </Grid2>
                    <Grid2 size={6}>
                        <AppTextInput type='number' control={control} name="quantityInStock" label='Quantity in stock' />
                    </Grid2>
                    <Grid2 size={12}>
                        <AppTextInput 
                            control={control} 
                            multiline
                            rows={4}
                            name="description" 
                            label='Description' />
                    </Grid2>
                    <Grid2 size={12} display='flex' justifyContent='space-between' 
                        alignItems='center'>
                        <AppDropzone name="file" control={control} />
                        {watchFile?.preview ? (
                            <img src={watchFile.preview} alt='preview of image' 
                                style={{maxHeight: 200}} />
                        ) : product?.pictureUrl ? (
                            <img src={product?.pictureUrl} alt='preview of image' 
                                style={{maxHeight: 200}} />
                        ) : null}
                    </Grid2>
                </Grid2>
                <Box display='flex' justifyContent='space-between' sx={{mt: 3}}>
                    <Button onClick={() => setEditMode(false)} variant="contained" color='inherit'>Cancel</Button>
                    <LoadingButton 
                        loading={isSubmitting}
                        variant="contained" 
                        color='success' 
                        type="submit">Submit</LoadingButton>
                </Box>
            </form>
        </Box>
    )
}