import {Formik} from 'formik'
import {useEffect, useState} from 'react';
import * as Yup from 'yup';
import styles from './CreateAdvertisement.module.scss'

const AdvertisementSchema = Yup.object().shape({

    title: Yup.string()
        .min(5, 'Tytuł ogłoszenia jest zbyt krótki!')
        .max(50, 'Tytuł ogłoszenia jest zbyt długi!')
        .required('Tytuł ogłoszenia jest wymagany!'),
    description:  Yup.string()
        .min(20, 'Opis jest zbyt krótki!')
        .max(200, 'Opis jest za długi')
        .required('Opis jest wymagany!'),
    location: Yup.string()
        .required('Podanie lokalizacji jest wymagane!'),
    price: Yup.number()
        .required('Podanie ceny jest wymagane!')
    // lastName: Yup.string()
    //
    //     .min(2, 'Too Short!')
    //
    //     .max(50, 'Too Long!')
    //
    //     .required('Required'),
    //
    // email: Yup.string().email('Invalid email').required('Required'),

});

const CreateAdvertisement = () => {
    const[categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/categories', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => setCategories(res))
    }, [])

    return(
        <div className={styles.createAdvertisement}>
            <div className={styles.createAdvertisementWrapper}>
                <h3 className={styles.title}>Dodaj ogłoszenie</h3>
                <Formik
                    initialValues={{ title: '', category: '', location: '', description: '',  price: '' }}
                    onSubmit={(values) => {
                        console.log(values);
                        // console.log(new Date(1231234234).toLocaleString());
                        fetch('http://localhost:8080/advertisement/create', {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ title: values.title, description: values.description, location: values.location,  createdTime: new Date().getTime(), categoryID: values.category, price: values.price, userID: '62b2e442416cfec2cbd4955e'})
                        })
                            .then(res => res.json())
                            .then(res => console.log(res))
                    }}
                    validationSchema={AdvertisementSchema}
                >
                    {({
                          errors,
                          touched,
                          handleSubmit,
                          values,
                          handleChange,
                          handleBlur
                      }) => (
                        <form onSubmit={handleSubmit} className={styles.createAdvertisementForm}>
                            <section className={styles.section}>
                                <label>
                                    {errors.title}
                                    <h4>Tytuł ogłoszenia</h4>
                                    <input name="title" type="text" value={values.title} onChange={handleChange} onBlur={handleBlur}/>
                                    {errors.title && touched.title ? (
                                        <div>{errors.title}</div>
                                    ) : null}
                                </label>
                                <label>
                                    <h4>Wybierz kategorie</h4>
                                    <select name="category" value={values.category} onChange={handleChange} onBlur={handleBlur}>
                                        {categories.map(category => <option value={category._id} key={category._id}>{category.name}</option>)}
                                    </select>
                                </label>
                            </section>
                            <section className={styles.section}>
                                <label>
                                    <h4>Opis</h4>
                                    <textarea name="description" value={values.description} onChange={handleChange} onBlur={handleBlur} />
                                    {errors.description && touched.description ? (
                                        <div>{errors.description}</div>
                                    ) : null}
                                </label>
                            </section>
                            <section className={styles.section}>
                                <label>
                                    <h4>Podaj lokalizację</h4>
                                    <input name="location" type="text" value={values.location} onChange={handleChange} onBlur={handleBlur} />
                                    {errors.location && touched.location ? (
                                        <div>{errors.location}</div>
                                    ) : null}
                                </label>
                            </section>
                            <section className={styles.section}>
                                <label>
                                    <h4>Podaj cene</h4>
                                    <input name="price" type="number" value={values.price} onChange={handleChange} onBlur={handleBlur}/>
                                    {errors.price && touched.price ? (
                                        <div>{errors.price}</div>
                                    ) : null}
                                </label>
                            </section>
                            <section className={styles.section}>
                                <button type="submit">Dodaj ogłoszenie</button>
                            </section>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default CreateAdvertisement;