<template>
  <div id="app">
    <h3>vee-validate</h3> 
     <table border="1"  cellspacing="0" cellpadding="5" bordercolor="#333333">
        <tr>
            <th bgcolor="#EE0000"><font color="#FFFFFF">目次</font></th>
            <th bgcolor="#EE0000" width="800"><font color="#FFFFFF">説明</font></th>
        </tr>
        <tr>
            <td bgcolor="#99CC00" align="right" nowrap><router-link to="/v3_2" class="nav-link">input要素の追加</router-link></td>
            <td bgcolor="#FFFFFF" valign="top" width="150">
<pre>
input要素を追加しref関数を利用してリアクティブデータnameを定義してv-modelの設定を行います。
</pre>
            </td>
        </tr>
        <tr>
            <td bgcolor="#99CC00" align="right" nowrap><router-link to="/v3_3" class="nav-link">vee-validateの設定</router-link></td>
            <td bgcolor="#FFFFFF" valign="top" width="150">
<pre>
vee-validateではref関数ではなくデータを管理するためにuseField関数を利用します。
</pre>
            </td>
        </tr>
        <tr>
            <td bgcolor="#99CC00" align="right" nowrap><router-link to="/v3_3_2" class="nav-link">vee-validate useFiled</router-link></td>
            <td bgcolor="#FFFFFF" valign="top" width="150">
<pre>
useFiledから戻される値はオブジェクト
</pre>
            </td>
        </tr>
        <tr>
            <td bgcolor="#99CC00" align="right" nowrap><router-link to="/v3_4" class="nav-link">vee-validate+yup</router-link></td>
            <td bgcolor="#FFFFFF" valign="top" width="150">
<pre>
yupを利用したバリデーション
</pre>
            </td>
        </tr>
        <tr>
            <td bgcolor="#99CC00" align="right" nowrap><router-link to="/v3_5" class="nav-link">複数のinput要素</router-link></td>
            <td bgcolor="#FFFFFF" valign="top" width="150">
<pre>
これまでは1つのinput要素でしたが、ここで新たにinput要素を1つ追加します。
追加したinput要素は必須項目なだけではなくメールアドレスの形式かどうか
チェックを行うバリデーションemail()を追加しています。
</pre>
            </td>
        </tr>
        <tr>
            <td bgcolor="#99CC00" align="right" nowrap><router-link to="/v3_6" class="nav-link">useFormの利用</router-link></td>
            <td bgcolor="#FFFFFF" valign="top" width="150">
<pre>
useForm関数を利用してバリデーションのスキーマを作成することでバリデーションの処理をまとめる
</pre>
            </td>
        </tr>
        <tr>
            <td bgcolor="#99CC00" align="right" nowrap><router-link to="/v3_7" class="nav-link">useFormのerrors</router-link></td>
            <td bgcolor="#FFFFFF" valign="top" width="150">
<pre>
エラーメッセージについては
useField関数から戻されるerrorMessageを利用していましたが、
useForm関数から戻されるオブジェクトに含まれるerrorsからもメッセージを取得することができます
</pre>
            </td>
        </tr>
        <tr>
            <td bgcolor="#99CC00" align="right" nowrap><router-link to="/v3_8" class="nav-link">labelのカスタイズ</router-link></td>
            <td bgcolor="#FFFFFF" valign="top" width="150">
<pre>
yupを使って行うバリデーションの中でlabel()を使って変更することができます。
nameには名前、emailにはメールアドレスを設定しています。
</pre>
            </td>
        </tr>
        <tr>
            <td bgcolor="#99CC00" align="right" nowrap><router-link to="/v3_9" class="nav-link">エラーメッセージの設定</router-link></td>
            <td bgcolor="#FFFFFF" valign="top" width="150">
<pre>
表示されるメッセージを変更したい場合は
required, emailの引数に表示させたいメッセージを入力することで入力した文字列が表示されます。
</pre>
            </td>
        </tr>
        <tr>
            <td bgcolor="#99CC00" align="right" nowrap><router-link to="/v3_10" class="nav-link">イベントの設定 handleChange</router-link></td>
            <td bgcolor="#FFFFFF" valign="top" width="150">
<pre>
バリデーションを実行handleChange
</pre>
            </td>
        </tr>
        <tr>
            <td bgcolor="#99CC00" align="right" nowrap><router-link to="/v3_11" class="nav-link">useFieldで初期値の設定</router-link></td>
            <td bgcolor="#FFFFFF" valign="top" width="150">
<pre>
useField関数を使ってinput要素に初期値を設定
</pre>
            </td>
        </tr>
        <tr>
            <td bgcolor="#99CC00" align="right" nowrap><router-link to="/v3_12" class="nav-link">useFormで初期値の設定</router-link></td>
            <td bgcolor="#FFFFFF" valign="top" width="150">
<pre>
useFormを利用することで一箇所で初期値を設定することができます
</pre>
            </td>
        </tr>
        <tr>
            <td bgcolor="#99CC00" align="right" nowrap><router-link to="/v3_13" class="nav-link">useFieldのメタデータ</router-link></td>
            <td bgcolor="#FFFFFF" valign="top" width="150">
<pre>
useFiledから戻されるオブジェクトの中にはメタデータが含まれています。
metaにはvalid, touched, dirty, pending, initialValueが含まれています
</pre>
            </td>
        </tr>
        <tr>
            <td bgcolor="#99CC00" align="right" nowrap><router-link to="/v3_14" class="nav-link">handleBlurでメタデータを更新</router-link></td>
            <td bgcolor="#FFFFFF" valign="top" width="150">
<pre>
イベントに関連する関数handleChangeの他にhandleBlurがあります
handleBlurはバリデーションではメタデータの一つの値であるtouchedの値を更新するために利用することができます。
</pre>
            </td>
        </tr>
        <tr>
            <td bgcolor="#99CC00" align="right" nowrap><router-link to="/v3_15" class="nav-link">useFormのメタデータ</router-link></td>
            <td bgcolor="#FFFFFF" valign="top" width="150">
<pre>
useForm関数から戻されるオブジェクトにもmetaが含まれています。
useFiledとは異なり複数の要素に関するメタデータを持っているので
input要素への入力によってどのようにメタデータの値が変わるか確認します。
</pre>
            </td>
        </tr>
        <tr>
            <td bgcolor="#99CC00" align="right" nowrap><router-link to="/v4_1" class="nav-link">フォームの処理入力したデータを取得</router-link></td>
            <td bgcolor="#FFFFFF" valign="top" width="150">
<pre>
ここまではuseField, useFormを利用してバリデーション方法を確認してきましたが
ここでは入力したデータをどのように扱うことができるのか確認していきます。
</pre>
            </td>
        </tr>
        <tr>
            <td bgcolor="#99CC00" align="right" nowrap><router-link to="/v4_2" class="nav-link">handleSubmitの進捗の確認</router-link></td>
            <td bgcolor="#FFFFFF" valign="top" width="150">
<pre>
handleSubmit関数の中では入力したデータをバックエンドサーバに送信する等の処理を行います。
<strong>処理中に何度も送信ボタンを押させないために</strong>処理の進捗を確認することで制御することができます。
</pre>
            </td>
        </tr>
        <tr>
            <td bgcolor="#99CC00" align="right" nowrap><router-link to="/v4_3" class="nav-link">submitカウントの取得</router-link></td>
            <td bgcolor="#FFFFFF" valign="top" width="150">
<pre>
Vee-Validateではsubmitの回数を保存することができるのでその回数を利用してフォームの制御を行うことができます
useFormから戻されるオブジェクトの中にsubmitCountが含まれているのでそれを利用します。
</pre>
            </td>
        </tr>
        <tr>
            <td bgcolor="#99CC00" align="right" nowrap><router-link to="/v4_4" class="nav-link">入力した値をリセット</router-link></td>
            <td bgcolor="#FFFFFF" valign="top" width="150">
<pre>
handleSubmitで入力した値をサーバに送信後フォームの値をリセットしたい場合があります。
その場合のresetForm関数も準備されています
</pre>
            </td>
        </tr>
        <tr>
            <td bgcolor="#99CC00" align="right" nowrap><router-link to="/v4_5" class="nav-link">ネストされたオブジェクトデータ</router-link></td>
            <td bgcolor="#FFFFFF" valign="top" width="150">
<pre>
ネストされたオブジェクトデータを扱いたい時にはuseFieldで.(ドット)を使って
記述することで利用することができます
</pre>
            </td>
        </tr>
        <tr>
            <td bgcolor="#99CC00" align="right" nowrap><router-link to="/v5_0" class="nav-link">Componentsの場合</router-link></td>
            <td bgcolor="#FFFFFF" valign="top" width="150">
<pre>
ここまではComposition APを利用したい場合のvee-validateの説明を行ってきました
Componentsは名前の通りコンポーネントを利用して行います。
利用するコンポーネントの名前はForm, Field, ErrorMessageコンポーネントです。    
</pre>
            </td>
        </tr>
        <tr>
            <td bgcolor="#99CC00" align="right" nowrap><router-link to="/v5_1" class="nav-link">バリデーションスキーマ</router-link></td>
            <td bgcolor="#FFFFFF" valign="top" width="150">
<pre>
 バリデーションスキーマを利用してコードの書き換えを行います
</pre>
            </td>
        </tr>
        <tr>
            <td bgcolor="#99CC00" align="right" nowrap><router-link to="/v5_1_2" class="nav-link">汎化バリデーションスキーマ</router-link></td>
            <td bgcolor="#FFFFFF" valign="top" width="150">
<pre>
汎化バリデーションスキーマを利用してコードの書き換えを行います
</pre>
            </td>
        </tr>
        <tr>
            <td bgcolor="#99CC00" align="right" nowrap><router-link to="/v5_2" class="nav-link">submit処理</router-link></td>
            <td bgcolor="#FFFFFF" valign="top" width="150">
<pre>
 submit処理を行いたい場合は、Formタグに@submitイベントを設定してonSubmit関数を設定します
</pre>
            </td>
        </tr>

     </table>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>