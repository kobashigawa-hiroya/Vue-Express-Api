<template>
  <h4>Vee-Validateでフォームバリデーション</h4>
  <a href="https://reffect.co.jp/vue/veevaliate4" target="_blank">参照先</a><br>
  <input type="text" v-model="value" />
  <p>{{ value }}</p><p>{{ errorMessage }}</p>

  <pre>
useFiledから戻される値はオブジェクトなので分割代入を利用することもできます。
useField関数から戻されるオブジェクトの中からvalueのみ分割代入を利用して取り出しています。
valueはそのままv-modelに設定を行うことができます。   
ブラウザで確認するとページを開いた時点では何もエラーは表示されていませんが
一度input要素に文字を入力して入力した文字を削除すると
valueの値が空になるのでエラーメッセージが表示されます。 
  </pre>

<table>
  <tr>
    <td>
<pre>
&lt;input type="text" v-model="value" /&gt;
&lt;p&gt;｛｛ value ｝｝&lt;/p&gt;

&lt;script&gt;
import { useField } from 'vee-validate';
export default {
  setup() {
    const { value } = useField('name');
    return {
      value,
    };
  },
};
&lt;/script&gt;
</pre>
    </td>

    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ーー＞&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td>

<pre>
&lt;input type="text" v-model="value" /&gt;
&lt;p&gt;｛｛ value ｝｝&lt;/p&gt; &lt;p&gt;｛｛  errorMessage ｝｝&lt;/p&gt;

&lt;script&gt;
import { useField } from 'vee-validate';
export default {
  setup() {
    const { value, errorMessage } = useField('name', (value) => {
      if (!value) {
        return 'this field is required';
      }
      return true;
    });
    return {
      value,
      errorMessage,
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
export default {
  setup() {
    const { value, errorMessage } = useField('name', (value) => {
      if (!value) {
        return 'this field is required';
      }
      return true;
    });
    return {
      value,
      errorMessage,
    };
  },
};
</script>