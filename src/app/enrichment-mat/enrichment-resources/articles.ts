import { ResourceCategory } from './shared.model';
import { Resource } from '../enrichment-mat.component';
const a = 'ENRICHMENT_MATERIAL.RESOURCES.ARTICLES';
const img = 'assets/images/extras/';
export const Articles: Resource = {
  categoryId: ResourceCategory.ARTICLE,
  categoryName: 'ENRICHMENT_MATERIAL.RESOURCES.ARTICLES.NAME',
  items: [
    {
      title: '9 כללים לפני שיוצאים לאימון קוגניטיבי',
      descp:
        'אנחנו רחוקים לדעת הכל על המוח ויש לנו עוד שנים רבות של מחקר לפנינו, ובכל זאת יש לנו כבר כמה סימני דרך לגבי איך המוח פועל ומה חשוב לדעת',
      link: 'https://effectivate.co.il/%d7%9b%d7%9c%d7%9c%d7%99%d7%9d-%d7%9c%d7%a4%d7%a0%d7%99-%d7%90%d7%99%d7%9e%d7%95%d7%9f-%d7%a7%d7%95%d7%92%d7%a0%d7%99%d7%98%d7%99%d7%91%d7%99/',
      thumbnail: `${img}nine_rules.png`,
      isHeOnly: true,
    },
    {
      title: 'מהו חוסן ולמה זה חשוב לנו?',
      descp:
        'חוסן או resilience באנגלית הם אחד התחומים הכי נחקרים בשנים האחרונות. הסיבה לכך היא הניסיון להבין למה אנשים מסוימים הם יותר חסינים, כלומר הם מצליחים להתמודד באופן מיטבי עם אתגרי החיים',
      link: 'https://effectivate.co.il/%d7%97%d7%95%d7%a1%d7%9f-%d7%95%d7%91%d7%a8%d7%99%d7%90%d7%95%d7%aa/',
      thumbnail: `${img}hosen.png`,
      isHeOnly: true,
    },
    {
      title: 'אסטרטגיות -לא עוד חוכמה בדיעבד!',
      descp:
        'שמירה על עצמאות תפקודית היא בראש סדר העדיפויות עבור מבוגרים ולכן זה חשוב להבין אילו גורמים תורמים לתפקוד יומיומי טוב יותר',
      link: 'https://effectivate.co.il/%d7%90%d7%a1%d7%98%d7%a8%d7%98%d7%92%d7%99%d7%95%d7%aa-%d7%9c%d7%90-%d7%a2%d7%95%d7%93-%d7%97%d7%95%d7%9b%d7%9e%d7%94-%d7%91%d7%93%d7%99%d7%a2%d7%91%d7%93/',
      thumbnail: `${img}be_headed.png`,
      isHeOnly: true,
    },
    {
      title: 'אבחונים קוגניטיביים',
      descp:
        'אבחון קוגניטיבי מאפשר לזהות קשיים בתחומים כמו זיכרון, קשב, תפיסה חזותית, שפה, ארגון מידע, מהירות תגובה וכדומה. תוצאות האבחון מפורשות ביחס לגיל ולהיסטוריה רפואית',
      link: 'https://effectivate.co.il/%d7%90%d7%91%d7%97%d7%95%d7%a0%d7%99%d7%9d-%d7%a7%d7%95%d7%92%d7%a0%d7%99%d7%98%d7%99%d7%91%d7%99%d7%99%d7%9d/',
      thumbnail: `${img}Cognitive_diagnoses.png`,
      isHeOnly: true,
    },
    {
      title: 'תרגילי מוח – למידה, תרגול, והרגל',
      descp:
        'למידה היא תהליך פיזיולוגי המבוסס על עקרונות קבועים. כשאנחנו לומדים לנגן על פסנתר או לדבר שפה זרה, אנחנו צריכים להתמיד, לחזור על זה שוב ושוב',
      link: 'https://effectivate.co.il/%d7%9c%d7%9e%d7%99%d7%93%d7%94-%d7%aa%d7%a8%d7%92%d7%95%d7%9c-%d7%95%d7%94%d7%a8%d7%92%d7%9c/',
      thumbnail: `${img}cognitive_pratice.png`,
      isHeOnly: true,
    },
    {
      title: 'ירידה קוגניטיבית – על מה ולמה?',
      descp:
        'ירידה קוגניטיבית טבעית המתרחשת עם הגיל מתחילה מאמצע שנות ה 30 כתוצאה מתהליכי הזדקנות ביולוגים. שינויים שקורים לאורך החיים ברמת החלבונים בדם מסמנים שלושה שלבים של הזדקנות, בגיל 34, 60 ו 78',
      link: 'https://effectivate.co.il/%d7%99%d7%a8%d7%99%d7%93%d7%94-%d7%a7%d7%95%d7%92%d7%a0%d7%99%d7%98%d7%99%d7%91%d7%99%d7%aa-%d7%a2%d7%9c-%d7%9e%d7%94-%d7%95%d7%9c%d7%9e%d7%94/',
      thumbnail: `${img}cognitive_decrease.png `,
      isHeOnly: true,
    },
    {
      title: 'עולמו הקסום של הזיכרון',
      descp:
        'זיכרון הוא היכולת לשמר ולשחזר מידע שלמדנו או חווינו. זכרון מבוסס על עקרון של למידה, שהיא כמובן מחייבת את האפשרות של המוח להשתנות בעקבות החוויה',
      link: 'https://effectivate.co.il/%d7%a2%d7%95%d7%9c%d7%9e%d7%95-%d7%94%d7%a7%d7%a1%d7%95%d7%9d-%d7%a9%d7%9c-%d7%94%d7%96%d7%99%d7%9b%d7%a8%d7%95%d7%9f/',
      thumbnail: `${img}magical_world.png`,
      isHeOnly: true,
    },
    {
      title: 'משחקי חשיבה למבוגרים – עד כמה הם עוזרים לזיכרון?',
      descp:
        'עם הגיל מתרחשת ירידה טבעית ביכולת הזיכרון ועיבוד המידע. פעילות המוח נעשית איטית ויעילות ביצועיו יורדת ככל שעולה הגיל. מכיוון שזיכרון הוא חלק משמעותי ביותר בהתנהלות היומיומית',
      link: 'https://effectivate.co.il/%d7%9e%d7%a9%d7%97%d7%a7%d7%99-%d7%97%d7%a9%d7%99%d7%91%d7%94-%d7%9c%d7%9e%d7%91%d7%95%d7%92%d7%a8%d7%99%d7%9d/',
      thumbnail: `${img}Mind_Games.png`,
      isHeOnly: true,
    },
    {
      title: 'אימון זיכרון לגיל השלישי – תרגילים לשימור הזיכרון',
      descp:
        'הירידה בתפקוד המוחי וביכולת הזיכרון היא מצב טבעי ככל שעולה גיל האדם. אולם, יש מה לעשות כדי להתמודד עם האובדן. מחקרים שנעשו בנושא מצאו שתרגול ואימון המוח הינו חשוב בכל גיל',
      link: 'https://effectivate.co.il/%d7%aa%d7%a8%d7%92%d7%99%d7%9c%d7%99%d7%9d-%d7%9c%d7%a9%d7%99%d7%9e%d7%95%d7%a8-%d7%94%d7%96%d7%99%d7%9b%d7%a8%d7%95%d7%9f-%d7%91%d7%92%d7%99%d7%9c-%d7%94%d7%a9%d7%9c%d7%99%d7%a9%d7%99/',
      thumbnail: `${img}cognitive_training.png`,
      isHeOnly: true,
    },
    {
      title: 'התערבות מערכתית למניעת ירידה קוגניטיבית',
      descp:
        'מחקרים מהשנים האחרונות בוחנים את יעילותה של התערבות מערכתית לשימור בריאות קוגניטיבית במבוגרים עם רמת סיכון לדמנציה. התערבות מערכתית כוללת תזונה, אימון גופני, מעקב אחר מחלות רקע כרוניות, ואימון קוגניטיבי',
      link: 'https://effectivate.co.il/%d7%94%d7%aa%d7%a2%d7%a8%d7%91%d7%95%d7%aa-%d7%9e%d7%a2%d7%a8%d7%9b%d7%aa%d7%99%d7%aa-%d7%9c%d7%9e%d7%a0%d7%99%d7%a2%d7%aa-%d7%99%d7%a8%d7%99%d7%93%d7%94-%d7%a7%d7%95%d7%92%d7%a0%d7%99%d7%98%d7%99/',
      thumbnail: `${img}systemic_intervention.png`,
      isHeOnly: true,
    },
    {
      title: `${a}.BRAIN_AND_COGNITION.TITLE`,
      descp: `${a}.BRAIN_AND_COGNITION.DESCRIPTION`,
      link: `${a}.BRAIN_AND_COGNITION.LINK`,
      thumbnail: `${img}brain_and_cognition.png`,
    },
    {
      title: `${a}.BURNOUT.TITLE`,
      descp: `${a}.BURNOUT.DESCRIPTION`,
      link: `${a}.BURNOUT.LINK`,
      thumbnail: `${img}burnout.png`,
    },
    {
      title: `${a}.CHEMOBRAIN.TITLE`,
      descp: `${a}.CHEMOBRAIN.DESCRIPTION`,
      link: `${a}.CHEMOBRAIN.LINK`,
      thumbnail: `${img}chemo_brain.png`,
    },
    {
      title: `${a}.WHAT_IS_HEALTHY_AGING.TITLE`,
      descp: `${a}.WHAT_IS_HEALTHY_AGING.DESCRIPTION`,
      link: `${a}.WHAT_IS_HEALTHY_AGING.LINK`,
      thumbnail: `${img}what_is_healty_aging.png`,
    },
    {
      title: 'חמישה מיתוסים על המוח',
      descp:
        'המוח האנושי הוא אחד המבנים המסתוריים והמופלאים ביותר בעולם: נדמה שככל שאנו לומדים עליו יותר, כך יש יותר מה לגלות. במהלך השנים, מספר מיתוסים אודות המוח התפרסמו והתקבעו כאמת מוחלטת. במאמר זה נסקור חמישה מיתוסים נפוצים על המוח ונגלה אילו מהם נכונים ואילו לא. התוכלו לנחש?',
      link: 'https://effectivate.co.il/%d7%97%d7%9e%d7%99%d7%a9%d7%94-%d7%9e%d7%99%d7%aa%d7%95%d7%a1%d7%99%d7%9d-%d7%a2%d7%9c-%d7%94%d7%9e%d7%95%d7%97/',
      thumbnail: `${img}five_myths.png `,
      isHeOnly: true,
    },
    {
      title: 'הטכנולוגיה מתגייסת לטובת המוח',
      descp:
        'כשאנו רוצים לחזק את הגוף, נפנה לאימון ספורט כמו פילאטיס, יוגה או חדר כושר. ומה לגבי חיזוק המוח? בעשורים האחרונים פותחה שיטה חדשה המאפשרת לנו בדיוק את זה: אימון קוגניטיבי לחיזוק המוח.',
      link: 'https://effectivate.co.il/%d7%94%d7%98%d7%9b%d7%a0%d7%95%d7%9c%d7%95%d7%92%d7%99%d7%94-%d7%9e%d7%aa%d7%92%d7%99%d7%99%d7%a1%d7%aa-%d7%9c%d7%98%d7%95%d7%91%d7%aa-%d7%94%d7%9e%d7%95%d7%97/',
      thumbnail: `${img}technology_recruits.png`,
      isHeOnly: true,
    },
    {
      title: `${a}.IS_THERE_A_CONNECTION.TITLE`,
      descp: `${a}.IS_THERE_A_CONNECTION.DESCRIPTION`,
      link: `${a}.IS_THERE_A_CONNECTION.LINK`,
      thumbnail: `${img}is_there_a_connection.png`,
    },
    {
      title: `${a}.NEUROPLASTICITY.TITLE`,
      descp: `${a}.NEUROPLASTICITY.DESCRIPTION`,
      link: `${a}.NEUROPLASTICITY.LINK`,
      thumbnail: `${img}neuroplasticity.png`,
    },
    {
      title: `${a}.HOW_TO_THINK_BETTER.TITLE`,
      descp: `${a}.HOW_TO_THINK_BETTER.DESCRIPTION`,
      link: `${a}.HOW_TO_THINK_BETTER.LINK`,
      thumbnail: `${img}how_to_think_better.png`,
    },
    {
      title: `${a}.KNOW_YOUR_MEMORY.TITLE`,
      descp: `${a}.KNOW_YOUR_MEMORY.DESCRIPTION`,
      link: `${a}.KNOW_YOUR_MEMORY.LINK`,
      thumbnail: `${img}know_your_memory.png`,
    },
    {
      title: 'איך יוצרים הרגלים חדשים?',
      descp:
        'יש דברים רבים שאנו עושים בלי לשים אליהם לב. אלו הן פעולות שכבר עשינו פעמים רבות, וכעת מתבצעות אוטומטית, בלי שנבחר בצורה מודעת',
      link: 'https://effectivate.co.il/%d7%90%d7%99%d7%9a-%d7%99%d7%95%d7%a6%d7%a8%d7%99%d7%9d-%d7%94%d7%a8%d7%92%d7%9c%d7%99%d7%9d-%d7%97%d7%93%d7%a9%d7%99%d7%9d/',
      thumbnail: `${img}how_to_create.png`,
      isHeOnly: true,
    },
  ],
};
