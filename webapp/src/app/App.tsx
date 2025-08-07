import styles from './app.module.scss';
import { AppHeader } from '../widgets/app-header/app-header';
import { Home } from '../widgets/homeSection/home';
import { ArticlesSection } from '../widgets/articlesSection/articles';
import { DeveloperSection } from '../widgets/developerSection/developerSection';
import { Footer } from '../widgets/footer/footer';

  
const App = () => {

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
      <Home/>
      <ArticlesSection/>
      <DeveloperSection/>
      </main>
      <Footer/>
    </div>
  );
};

export default App;