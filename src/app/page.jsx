import Image from 'next/image';
import styles from './page.module.scss';
import Cube from 'public/cube.png';
import Work from 'public/work.png';
import HomeBanner from 'public/homeBanner.png';
import { FcIdea, FcGraduationCap, FcPositiveDynamic } from 'react-icons/fc';
import Button from '@/components/common/Button/Button';

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.item}>
                    <div className={styles.title}>
                        <h1>WebCrafters </h1>
                        <h2>Майстри Веб-Творчості</h2>
                        <h3>
                            <span>
                                <small className={styles.icon}>
                                    <FcIdea />
                                </small>
                                Ваша ідея,
                            </span>
                            <span>
                                <small className={styles.icon}>
                                    <FcGraduationCap />
                                </small>
                                Наша творчість,
                            </span>
                            <span>
                                <small className={styles.icon}>
                                    <FcPositiveDynamic />
                                </small>
                                Ваш успіх в Інтернеті!
                            </span>
                        </h3>
                    </div>
                    <Button w={100} text={'Наші роботи'} url={'/portfolio'} />
                </div>
                <div className={styles.item}>
                    <Image
                        className={styles.img}
                        src={Cube}
                        alt="blogBusterBanner"
                        priority
                    />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.item}>
                    <Image
                        className={styles.img}
                        src={HomeBanner}
                        alt="blogBusterBanner"
                    />
                </div>
                <div className={styles.item}>
                    <p className={styles.description}>
                        Ми втілюємо ваші ідеї в життя, надаючи професійні
                        послуги з дизайну та розробки, щоб створити веб-сайти,
                        які захоплюють та залишають слід в інтернеті.
                    </p>
                    <Image
                        className={styles.descImage}
                        src={Work}
                        alt="descImage"
                        priority
                    />
                    <Button w={100} text="Про нас" url={'/about'} />
                </div>
            </div>
        </div>
    );
}
