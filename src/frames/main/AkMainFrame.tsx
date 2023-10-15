import { Outlet } from 'react-router-dom';
import { AkMainBar } from './main-bar';
import { AkMainBarMobile } from './main-bar-mobile';
import styles from './styles.module.less';
import { AkFooter } from './footer';
import { useTranslation } from 'react-i18next';
import { typeLang } from './types';

export const MenuFrame: React.FunctionComponent = () => {
  const {i18n} = useTranslation();
  const handleLang: (lang: string) => void = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={styles.frame}>
      <div className={styles.mainBar}>
        <AkMainBar
          theme='dark'
          lang={i18n.language as typeLang}
          onClickCreate={()=>{}}
          onClickSocial={()=>{}}
          onClickTheme={()=>{}}
          onClickLang={handleLang}
        />
      </div>
      <div className={styles.mainBarMobile}>
        <AkMainBarMobile
          theme='dark'
          lang={i18n.language as typeLang}
          onClickCreate={()=>{}}
          onClickSocial={()=>{}}
          onClickTheme={()=>{}}
          onClickLang={handleLang}
        />
      </div>
      <div className={styles.cont}>
        <Outlet />
      </div>
      <div className={styles.footer}>
        <AkFooter />
      </div>
    </div>
  );
};

export default MenuFrame;