import { Checkbox } from '@/components/ui/checkbox';
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { cn } from '@/lib/utils';
import type { FC } from 'react';
import { Control } from 'react-hook-form';

interface Item {
    value: any
    label: string
}
interface FormCheckboxProps {
    control: Control<any>
    name: string
    title?: string
    placeholder?: string
    item: Item
    defaultValue?: Item
    items?: Item[]
    className?: string
}

const FormCheckbox: FC<FormCheckboxProps> = ({ defaultValue, items, item, control, name, className, title, placeholder, ...props }) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => {
                return (
                    <FormItem className={cn(className, "flex flex-row items-center ")}>
                        <FormControl>
                            <Checkbox
                                onCheckedChange={(checked) => {
                                    return checked
                                        ? field.onChange(item.value)
                                        : field.onChange(undefined)
                                }}
                            />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                            {item.label}
                        </FormLabel>
                    </FormItem>
                )
            }}
        />
    );
}

export default FormCheckbox;
