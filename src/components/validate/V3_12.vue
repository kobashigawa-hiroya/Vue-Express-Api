<template>
  <h4>Vee-Validateでフォームバリデーション</h4>
  <a href="https://reffect.co.jp/vue/veevaliate4" target="_blank">参照先</a><br>
  name:<input type="text" v-model="name" />
  <p>{{ name }}</p><p>{{ errors.name }}</p>
  <!-- email:<input type="text" :value="email" @blur="handleChange" /> -->
  email:<input type="text" v-model="email" @change="handleChange" />
  <!-- email:<input type="text" :value="email" @input="handleChange" /> -->
  <p>{{ email }}</p><p>{{ errors.email }}</p>

  <pre>


<strong>useFormで初期値を設定</strong>
useField関数で初期値を設定することができました。
useFieldで初期値を設定する場合はuseField毎に設定を行う必要があります。
useFormを利用することで一箇所で初期値を設定することができます。
<strong>initialValueではなくinitialValuesと”s”がついているので注意してください。</strong>
</pre>

<table>
  <tr>
    <td>
<pre>

&lt;input type="text" v-model="name" /&gt;
&lt;p&gt;｛｛ name ｝｝&lt;/p&gt; &lt;p&gt;｛｛  errors.name ｝｝&lt;/p&gt;
&lt;input type="text" v-model="email" /&gt;
&lt;p&gt;｛｛ email ｝｝&lt;/p&gt; &lt;p&gt;｛｛ errors.email ｝｝&lt;/p&gt;


&lt;script&gt;
import { useField, useForm  } from 'vee-validate';
import * as yup from 'yup';
export default {
  setup() {
    const schema = yup.object({
      name: yup.string().
            required('名前は、必須の項目です。'). 
      email: yup.string().required('必須の項目です。').
            email('メールアドレスの形式ではありません。'),
    });






    const { errors } = useForm({
      validationSchema: schema,
    });

    const { value: name } = 
      useField('name'
        <strong>,undefined,{ initialValue: '田中角栄'}</strong>);
    const { value: email } = 
      useField('email');

    return {
      name,
      email,
      errors,
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
&lt;p&gt;｛｛ name ｝｝&lt;/p&gt; &lt;p&gt;｛｛  errors.name ｝｝&lt;/p&gt;
&lt;input type="text" v-model="email" /&gt;
&lt;p&gt;｛｛ email ｝｝&lt;/p&gt; &lt;p&gt;｛｛ errors.email ｝｝&lt;/p&gt;


&lt;script&gt;
import { useField, useForm  } from 'vee-validate';
import * as yup from 'yup';
export default {
  setup() {
    const schema = yup.object({
      name: yup.string().required('名前は、必須の項目です。'),
      email: yup.string().required('必須の項目です。').
              email('メールアドレスの形式ではありません。'),
    });

    <strong>const formValues = {
      name: '田中角栄',
      email: 't.kakuei@example.com',
    };</strong>

    const { errors } = useForm({
      validationSchema: schema,
      <strong>initialValues: formValues,</strong>
    });

    const { value: name } = useField('name');
    const { value: email, handleChange } = useField('email');

    return {
      name,
      email,
      errors,
      handleChange,
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
      name: yup.string().required('名前は、必須の項目です。'),
      email: yup.string().required('必須の項目です。').email('メールアドレスの形式ではありません。'),
    });

    const formValues = {
      name: '田中角栄',
      email: 't.kakuei@example.com',
    };

    const { errors } = useForm({
      validationSchema: schema,
      initialValues: formValues,
    });

    const { value: name } = useField('name');
    const { value: email, handleChange } = useField('email');

    return {
      name,
      email,
      errors,
      handleChange,
    };
  },
};
</script>