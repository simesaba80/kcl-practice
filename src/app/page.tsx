import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1>hello world!</h1>
      <div>
        <img src="https://s3.ap-northeast-1.wasabisys.com/mastodondb/accounts/avatars/110/236/191/834/042/226/original/1890ab9c43e05a0e.jpg" />
        <p>
          どうもフロントエンド勉強中のしめさばです． <br />
          Goが好きなのでバックエンドの開発をしていることが多いです． <br />
          皆でWeb開発を頑張ろう！
        </p>
        <div>X: @kyusime</div>
      </div>
    </>
  );
}
