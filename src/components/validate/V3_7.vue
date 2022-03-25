<template>
  <h4>Vee-Validateでフォームバリデーション</h4>
  <a href="https://reffect.co.jp/vue/veevaliate4" target="_blank">参照先</a><br>
  name:<input type="text" v-model="name" />
  <p>{{ name }}</p><p>{{ errors.name }}</p>
  email:<input type="text" v-model="email" />
  <p>{{ email }}</p><p>{{ errors.email }}</p>

  <pre>


<strong>useFormのerrors</strong>

エラーメッセージについてはuseField関数から戻されるerrorMessageを利用していましたが、
useForm関数から戻されるオブジェクトに含まれるerrorsからもメッセージを取得することができます。
errorsの中にはnameとemailのエラーメッセージが入ります。
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

    const { value: name, errorMessage: nameError } = 
          useField('name');
    const { value: email, errorMessage: emailError } = 
          useField('email');

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
&lt;p&gt;｛｛ name ｝｝&lt;/p&gt; &lt;p&gt;｛｛  <strong>errors.name</strong> ｝｝&lt;/p&gt;
&lt;input type="text" v-model="email" /&gt;
&lt;p&gt;｛｛ email ｝｝&lt;/p&gt; &lt;p&gt;｛｛ <strong>errors.email</strong> ｝｝&lt;/p&gt;
  
&lt;script&gt;
import { useField, useForm  } from 'vee-validate';
import * as yup from 'yup';
export default {
  setup() {
    const schema = yup.object({
      name: yup.string().required(),
      email: yup.string().required().email(),
    });
    <strong>const { errors } =</strong> useForm({
      validationSchema: schema,
    });

    <strong>const { value: name } =</strong>
        useField('name');
    <strong>const { value: email } = </strong>
        useField('email');

    return {
      <strong>name,
      email,
      errors,</strong>
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
    const { errors } = useForm({
      validationSchema: schema,
    });

    const { value: name } = useField('name');
    const { value: email } = useField('email');

    return {
      name,
      email,
      errors,
    };
  },
};
</script>