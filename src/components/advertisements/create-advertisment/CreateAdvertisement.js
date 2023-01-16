import {Formik} from 'formik'
import {useEffect, useState} from 'react';
import * as Yup from 'yup';
import styles from './CreateAdvertisement.module.scss'
import {bool, boolean} from "yup";
import ChooseCategoryPanel from "./ChooseCategoryPanel";
import { IoIosArrowDown } from "react-icons/io";
import callToAPI from "../../../api";
import ChooseStatus from "./ChooseStatus";
import locationHref from "../../../helpers/locationHref";

const AdvertisementSchema = Yup.object().shape({
    title: Yup.string()
        .min(16, 'Tytuł nie może być krótszy niż 16 znaków.')
        .max(70, 'Tytuł musi mieć mniej niż 70 znaków')
        .required('Tytuł jest najważniejszy, nie zapomnij o nim'),
    description:  Yup.string()
        .min(80, 'Min. 80 znaków. Pamiętaj o szczegółowych informacjach czy uszkodzeniach (jeżeli takie występują)')
        .max(1000, 'W opisie jest za dużo znaków za dużo. Usuń nadmiarowe, aby przejść dalej.')
        .required('Min. 80 znaków. Pamiętaj o szczegółowych informacjach czy uszkodzeniach (jeżeli takie występują)'),
    location: Yup.string()
        .required('Lokalizacja jest wymagana'),
    price: Yup.number('dasdas')
        .positive('Nieprawidłowa cena, cena powinna być podana w formacie: 1234567.50')
        .required('Podanie ceny jest wymagane!')
});



const CreateAdvertisement = () => {
    const[categoryName, setCategoryName] = useState('');
    const[statusName, setStatusName] = useState('');
    const[chooseCategoryPanel, setChooseCategoryPanel] = useState(false);
    const[chooseStatusPanel, setChooseStatusPanel] = useState(false);
    const[chosenCategory, setChosenCategory] = useState('')
    const[chosenCondition, setChosenCondition] = useState('')

    useEffect(() => {
        callToAPI(`/categories/${chosenCategory}`, 'get')
            .then(res => setCategoryName(res.name.charAt(0).toUpperCase() + res.name.slice(1)))

        callToAPI(`/condition/${chosenCondition}`, 'get')
            .then(res => setStatusName(res.name.charAt(0).toUpperCase() + res.name.slice(1)))
    }, [chosenCategory, chosenCondition])
    return(
        <div className={styles.createAdvertisement}>
            <div className={styles.createAdvertisementWrapper}>
                <h3 className={styles.title}>Dodaj ogłoszenie</h3>
                <Formik
                    initialValues={{ title: '', category: chosenCategory, location: '', description: '',  price: '', status: chosenCondition }}
                    onSubmit={(values) => {
                        console.log(values)
                        callToAPI('/advertisement/create', 'post', {
                            title: values.title,
                            description: values.description,
                            location: values.location,
                            createdTime: new Date().getTime(),
                            categoryID: chosenCategory,
                            price: values.price,
                            userID: '62b2e442416cfec2cbd4955e',
                            promoted: true,
                            status: chosenCondition
                        })
                            .then(res => locationHref('/'))
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
                                <label className={styles.label}>
                                    <h4 className={styles.labelTitle}>Tytuł ogłoszenia *</h4>
                                    <input className={`${styles.input} ${styles.titleInput} ${errors.title && touched.title ? styles.error : ''}`} name="title" type="text" value={values.title} onChange={handleChange} onBlur={handleBlur}/>
                                    {errors.title && touched.title ? (
                                        <p className={styles.errorMessage}>{errors.title}</p>
                                    ) : null}
                                </label>
                                <label className={styles.label}>
                                    <h4 className={styles.labelTitle}>Wybierz kategorie</h4>
                                    {/*<select name="category" value={values.category} onChange={handleChange} onBlur={handleBlur}>*/}
                                    {/*    {categories.map(category => <option value={category._id} key={category._id}>{category.name}</option>)}*/}
                                    {/*</select>*/}
                                    <div className={`${styles.input} ${styles.chooseCategory}`} onClick={() => setChooseCategoryPanel(true)}>
                                        <span className={styles.chooseCategoryTitle}>{categoryName ? categoryName : 'Wybierz kategorię'}</span>
                                        <IoIosArrowDown className={styles.icon} />
                                    </div>
                                    {chooseCategoryPanel && <ChooseCategoryPanel setChosenCategory={setChosenCategory} setChooseCategoryPanel={setChooseCategoryPanel}/>}
                                </label>
                            </section>
                            <section className={styles.section}>
                                <label className={styles.label}>
                                    <h4 className={styles.labelTitle}>Opis *</h4>
                                    <textarea className={`${styles.input} ${styles.descriptionTextArea} ${errors.description && touched.description ? styles.error : ''}`} name="description" value={values.description} onChange={handleChange} onBlur={handleBlur} />
                                    {errors.description && touched.description ? (
                                        <p className={styles.errorMessage}>{errors.description}</p>
                                    ) : null}
                                </label>
                            </section>
                            <section className={styles.section}>
                                <label className={styles.label}>

                                    <h4 className={styles.labelTitle}>Lokalizacja *</h4>
                                    <input className={`${styles.input} ${styles.location} ${errors.location && touched.location ? styles.error : ''}`} name="location" type="text" value={values.location} onChange={handleChange} onBlur={handleBlur} />
                                    {errors.location && touched.location ? (
                                        <div className={styles.errorMessage}>{errors.location}</div>
                                    ) : null}
                                    {/*<select>*/}
                                    {/*    {countries.map(city => {*/}
                                    {/*        return(*/}
                                    {/*                <option value="volvo">{city}</option>*/}
                                    {/*        )*/}
                                    {/*    })}*/}
                                    {/*</select>*/}
                                </label>
                            </section>
                            <section className={styles.section}>
                                <label className={styles.label}>
                                    <h4 className={styles.labelTitle}>Stan *</h4>
                                    <div className={`${styles.input} ${styles.chooseStatus}`} onClick={() => setChooseStatusPanel === true ? setChooseStatusPanel(false) : setChooseStatusPanel(true)}>
                                        <span className={styles.chooseStatusTitle}>{statusName ? statusName : 'Wybierz'}</span>
                                        <IoIosArrowDown className={styles.icon} />
                                    </div>
                                    {chooseStatusPanel && <ChooseStatus setChooseStatusPanel={setChooseStatusPanel} setChosenCondition={setChosenCondition} />}
                                </label>
                            </section>
                            <section className={styles.section}>
                                <label className={styles.label}>
                                    <h4 className={styles.labelTitle}>Podaj cene*</h4>
                                    <input name="price" className={`${styles.input} ${styles.price} ${errors.price && touched.price ? styles.error : ''}`} value={values.price} onChange={handleChange} onBlur={handleBlur}/>
                                    {errors.price && touched.price ? (
                                        <div className={styles.errorMessage}>{errors.price}</div>
                                    ) : null}
                                </label>
                            </section>
                            <section className={styles.section}>
                                <button type="submit" className={styles.submitButton}>Dodaj ogłoszenie</button>
                            </section>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default CreateAdvertisement;