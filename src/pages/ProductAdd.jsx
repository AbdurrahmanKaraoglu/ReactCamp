import React from 'react';
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import { Button } from 'semantic-ui-react';
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput';

export default function ProductAdd() {
    const initialValues = { productName: "", unitPrice: "1",unitsInStock:"1", quantityPerUnit:"", categoryName:""}

    const schema = Yup.object({
        productName: Yup.string().required("Ürün Adı Girilmesi Zorunlu"),
        unitPrice: Yup.number().required("Ürün Fiyatı Girilmesi Zorunlu"),
        unitsInStock: Yup.number().min(1, "Minumum 1 Ürün Girilebilir").max(100,"Maksimum 100 Ürün Girilebilir").required("Stok Adedi Girilmesi Zorunlu"),
        quantityPerUnit: Yup.string().required("Açıklama Girilmesi Zorunlu"),
        categoryName: Yup.string().required("Kategori Adı Girilmesi Zorunlu")
    })

    return (
        <div>
            <h1> Ürün Ekleme Formu</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                <Form className="ui form" >
                    <KodlamaIoTextInput name="productName" placeholder="Ürün Adı" />
                    <KodlamaIoTextInput name="unitPrice" placeholder="Ürün Fiyatı" />
                    <KodlamaIoTextInput name="unitsInStock" placeholder="Stok Adedi" />
                    <KodlamaIoTextInput name="quantityPerUnit" placeholder="Açıklama" />
                    <KodlamaIoTextInput name="categoryName" placeholder="Kategori" />
                    {/* <FormField>
                        <Field name="productName" placeholder='Product Name' />
                        <ErrorMessage name="productName" render={error =>
                            <Label pointing basic color="red" content={error}></Label>
                        }></ErrorMessage>
                    </FormField> */}
                    {/* <FormField>
                        <Field name="unitPrice" placeholder='Unit Price' />
                        <ErrorMessage name="unitPrice" render={error =>
                            <Label pointing basic color="red" content={error}></Label>
                        }></ErrorMessage>
                    </FormField> */}
                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}

// Redux-thunk ""