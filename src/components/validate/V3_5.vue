<template>
  <h4>Vee-Validateでフォームバリデーション</h4>
  <a href="https://reffect.co.jp/vue/veevaliate4" target="_blank">参照先</a><br>
  name:<input type="text" v-model="name" />
  <p>{{ name }}</p><p>{{ nameError }}</p>
  email:<input type="text" v-model="email" />
  <p>{{ email }}</p>
  <p>{{ emailError }}</p>
  <pre>
複数のinput要素を扱う

これまでは1つのinput要素でしたが、ここで新たにinput要素を1つ追加します。
追加したinput要素は必須項目なだけではなくメールアドレスの形式かどうかチェックを行うバリデーションemail()を追加しています。
それ以外についてはnameの設定と同じです
</pre>

<table>
  <tr>
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

    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ーー＞&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td>

<pre>

&lt;input type="text" v-model="name" /&gt;
&lt;p&gt;｛｛ name ｝｝&lt;/p&gt; &lt;p&gt;｛｛  nameError ｝｝&lt;/p&gt;
&lt;input type="text" v-model="email" /&gt;
&lt;p&gt;｛｛ email ｝｝&lt;/p&gt; &lt;p&gt;｛｛  emailError ｝｝&lt;/p&gt;
  
&lt;script&gt;
import { useField } from 'vee-validate';
import * as yup from 'yup';
export default {
  setup() {
    const { value: name, errorMessage: nameError } =
       useField('name',yup.string().required());
    const { value: email, errorMessage: emailError } = 
       useField('email',yup.string().required().email());
    return {
      name,nameError,
      email,emailError,
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
    const { value: name, errorMessage: nameError } =
       useField('name',yup.string().required());
    const { value: email, errorMessage: emailError } = 
       useField('email',yup.string().required().email());
    return {
      name,nameError,
      email,emailError,
    };
  },
};
</script>