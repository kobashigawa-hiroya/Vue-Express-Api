<template>
  <h4>Vee-Validateでフォームバリデーション</h4>
  <a href="https://reffect.co.jp/vue/veevaliate4" target="_blank">参照先</a><br>
  name:<input type="text" v-model="name" />
  <p>{{ name }}</p><p>{{ nameError }}</p>
  email:<input type="text" v-model="email" />
  <p>{{ email }}</p>
  <p>{{ emailError }}</p>
  <pre>
useFormの利用

useFieldを利用して個別にバリデーションの設定を行なっていましたが
useForm関数を利用してバリデーションのスキーマを作成することで
バリデーションの処理をまとめることができます。
スキーマというと何か難しいことを設定するのかと思うかもしれませんが
一つの入れ物を用意してそこにバリデーションを一括で設定
</pre>

<table>
  <tr>
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

    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ーー＞&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td>

<pre>

&lt;input type="text" v-model="name" /&gt;
&lt;p&gt;｛｛ name ｝｝&lt;/p&gt; &lt;p&gt;｛｛  nameError ｝｝&lt;/p&gt;
&lt;input type="text" v-model="email" /&gt;
&lt;p&gt;｛｛ email ｝｝&lt;/p&gt; &lt;p&gt;｛｛  emailError ｝｝&lt;/p&gt;
  
&lt;script&gt;
<strong>import { useField, useForm  } from 'vee-validate';</strong>
import * as yup from 'yup';
export default {
  setup() {
    <strong>const schema = yup.object({
      name: yup.string().required(),
      email: yup.string().required().email(),
    });
    useForm({
      validationSchema: schema,
    });</strong>

    const { value: name, errorMessage: nameError } = 
          <strong>useField('name');</strong>
    const { value: email, errorMessage: emailError } = 
          <strong>useField('email');</strong>

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
import { useField, useForm  } from 'vee-validate';
import * as yup from 'yup';
export default {
  setup() {
    const schema = yup.object({
      name: yup.string().required(),
      email: yup.string().required().email(),
    });
    useForm({
      validationSchema: schema,
    });

    const { value: name, errorMessage: nameError } = useField('name');
    const { value: email, errorMessage: emailError } = useField('email');

    return {
      name,nameError,
      email,emailError,
    };
  },
};
</script>