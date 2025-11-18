import { GmailPage, GmailTitle, InfoAboutGmail } from "./style";

function Gmail() {
  return (
    <GmailPage>
      <GmailTitle>Gmail</GmailTitle>
      <InfoAboutGmail>
        Gmail — это бесплатный почтовый сервис от компании Google, запущенный в
        2004 году. Основные особенности: Электронная почта с большим объёмом
        хранения (15 ГБ бесплатно, общие с Google Диском и Фото). Встроенная
        защита от спама и вирусов. Удобная организация писем с помощью ярлыков,
        вкладок «Основные», «Соцсети», «Промоакции». Интеграция с другими
        сервисами Google (Календарь, Диск, Meet). Доступ с веба, мобильных
        приложений и через почтовые клиенты по протоколам IMAP/POP3.
      </InfoAboutGmail>
    </GmailPage>
  );
}
export default Gmail;
