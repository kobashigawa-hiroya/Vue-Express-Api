<template>
  <h4>Vee-Validateでフォームバリデーション</h4>
  <a href="https://reffect.co.jp/vue/veevaliate4" target="_blank">参照先</a><br>
  <input type="text" v-model="name" />
  <p>{{ name }}</p><p>{{ nameError }}</p>

  <pre>    
先程設定していたバリデーション関数をyupに変更します。

必須項目なのでyup.required()ではと思ってしまうかもしれませんが
yup.string().required()のように文字列なのでstring()が必要です
nput要素に文字を入れて、その後文字を削除するとエラーメッセージが表示されます。
yupを利用してバリデーションができることが確認できました。

input要素が1つなのでvalueという名前を利用していましたが
複数のinput要素を扱っていくのでvalueとerrorMessageに別名をつけます
  </pre>

<table>
  <tr>
    <td>
<pre>
&lt;input type="text" v-model="value" /&gt;
&lt;p&gt;｛｛ value ｝｝&lt;/p&gt; &lt;p&gt;｛｛  errorMessage ｝｝&lt;/p&gt;

&lt;script&gt;
import { useField } from 'vee-validate';
import * as yup from 'yup';
export default {
  setup() {
    const { value, errorMessage } = 
      useField('name', yup.string().required());
    return {
      value,
      errorMessage,
    };
  },
};
&lt;/script&gt;
</pre>
    </td>

    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ーー＞&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td>

<pre>
&lt;input type="text" v-model="name" /&gt;
&lt;p&gt;｛｛ name ｝｝&lt;/p&gt; &lt;p&gt;｛｛  nameError ｝｝&lt;/p&gt;

&lt;script&gt;
import { useField } from 'vee-validate';
import * as yup from 'yup';
export default {
  setup() {
    const { value: name, errorMessage: nameError } =
      useField('name', yup.string().required());
    return {
      name,
      nameError,
    };
  },
};
&lt;/script&gt;
</pre>

    </td>
    </tr>

</table>

</template>

<script>
import { useField } from 'vee-validate';
import * as yup from 'yup';
export default {
  setup() {
    const { value: name, errorMessage: nameError } = useField(
      'name',
      yup.string().required()
    );
    return {
      name,
      nameError,
    };
  },
};
</script>