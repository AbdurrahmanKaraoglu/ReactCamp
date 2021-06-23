import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FormField,Button } from 'semantic-ui-react';

export default function ProductAdd() {
    const initialValues = { productName: "", unitPrice: 10 }

    const schema = Yup.object({
        productName: Yup.string().required("Ürün Adı Girilmesi Zorunlu"),
        unitPrice: Yup.number().required("Ürün Fiyatı Girilmesi Zorunlu")
    })

    return (
        <div>
            <Formik 
            initialValues={initialValues} 
            validationSchema={schema}
            onSubmit={(values)=>{
                console.log(values);
            }}
            >
                <Form className="ui form">
                    <FormField>
                        <Field name="productName" placeholder='Product Name' />
                    </FormField>
                    <FormField>
                        <Field name="unitPrice" placeholder='Unit Price' />
                    </FormField>
                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
