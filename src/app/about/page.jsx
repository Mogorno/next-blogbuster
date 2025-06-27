import React from 'react';
import styles from './page.module.scss';
import Image from 'next/image';
import TopBanner from 'public/topBanner.svg';
import Button from '@/components/common/Button/Button';

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    className={styles.img}
                    src={TopBanner}
                    alt="Top Banner"
                    priority={true}
                />
                <div className={styles.imgText}>
                    Разом до цифрового успіху: ваш сайт, наша майстерність.
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Хто ми?</h1>
                    <div className={styles.textContent}>
                        <p className={styles.description}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Enim dolorem provident excepturi cum ea
                            repudiandae ducimus unde, repellendus soluta fuga
                            dolore, quasi repellat dolores, culpa distinctio
                            eius error quidem aliquam.
                        </p>
                        <p className={styles.description}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. <br />
                            Earum eius, molestias iure saepe adipisci quam
                            labore, in sequi asperiores, nulla illo veniam at?
                            Sit natus quam accusamus velit sint repellendus!
                        </p>
                        <p className={styles.description}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Amet laborum at temporibus! Doloremque illum
                            tempora asperiores quas commodi vero, dolor minus
                            nisi harum eligendi sint repellat reprehenderit
                            culpa excepturi fugit. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Ex et voluptatem
                            ducimus magni id placeat? Nostrum magni temporibus
                            assumenda, nulla adipisci, consequatur blanditiis
                            voluptate provident explicabo sed fugit minima
                            inventore.
                        </p>
                    </div>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>Що ми робимо</h1>
                    <div className={styles.textContent}>
                        <p className={styles.description}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Sequi nobis corporis fugiat ut quo in laborum
                            <br />
                            placeat animi, obcaecati saepe ea! Hic totam
                            assumenda rerum consequatur sequi dignissimos culpa
                            nihil!
                        </p>
                        <ul className={styles.textList}>
                            <li>Lorem, ipsum dolor.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                        </ul>
                        <p className={styles.description}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Vel debitis ab provident tenetur neque
                            voluptatem culpa nesciunt placeat excepturi
                            sapiente! Aliquid ut repudiandae quod harum vitae!
                            <br />
                            Laboriosam in doloremque accusantium.
                        </p>
                    </div>

                    <Button
                        text={`Зв'яжіться з нами`}
                        url={'/contact'}
                        w={100}
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
