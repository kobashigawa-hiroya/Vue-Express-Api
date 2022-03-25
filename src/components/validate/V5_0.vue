<template>
  <h4>Vee-Validateでフォームバリデーション</h4>
  <a href="https://reffect.co.jp/vue/veevaliate4" target="_blank">参照先</a><br>
  <Form>
    <p><Field name="name" :rules="isRequired" /></p>
    <p><ErrorMessage name="name" /></p>
    
  </Form>
<pre>

<strong>Componentsの場合</strong>
ここまではComposition APを利用したい場合のvee-validateの説明を行ってきました
Componentsについても動作確認を行っていきます。
Componentsは名前の通りコンポーネントを利用して行います
利用するコンポーネントの名前はForm, Field, ErrorMessageコンポーネントです

Formコンポーネントがformタグ、Fieldコンポーネントがinputタグ、
ErrorMessageはデフォルトではspanタグの中にバリデーションのエラーが表示されるコンポーネントです
</pre>

<table>
  <tr>
    <td>
<pre>

  &lt;form @submit="onSubmit"&gt;
      &lt;input type="text" v-model="name" /&gt;
      &lt;p&gt;｛｛ name }}&lt;/p&gt;&lt;p&gt;｛｛ errors['form.name'] }}&lt;/p&gt;
  &lt;/form&gt;

&lt;script&gt;
import { useField, useForm } from 'vee-validate';
import { object, string } from 'yup';
export default {
  setup() {
    const schema = object({
      form: object({
          name: string().required('名前は、必須の項目です。'),
      }),
    });

    const { errors, meta, handleSubmit } = useForm({
      validationSchema: schema,
      initialValues: {form:
              {name: '',},},
    });

    const onSubmit = handleSubmit((values,{ resetForm}) =>{
      console.log(values);
      //入力した値をサーバに送信したりする処理
      resetForm();
    });

    const { value: name } = useField('form.name'));

    return {
      name,
      errors,
      meta,
      handleSubmit,
      onSubmit,
    };
  },
};
&lt;/script&gt;

</pre>
    </td>

    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ーー＞&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td>

<pre>

  &lt;Form&gt;
    &lt;Field name="name" :rules="isRequired" /&gt;
    &lt;ErrorMessage name="name" /&gt;
  &lt;/Form&gt;


&lt;script&gt;
import { Field, Form, ErrorMessage } from 'vee-validate';

export default {
  <strong>components: { Field, Form, ErrorMessage },</strong>
  setup() {
    const isRequired = (value) => {
      if (value && value.trim()) {
        return true;
      }

      return 'This is required';
    };

    return {
      isRequired,
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
import { Field, Form, ErrorMessage } from 'vee-validate';
export default {
  components: { Field, Form, ErrorMessage },
  setup() {
    const isRequired = (value) => {
      if (value && value.trim()) {
        return true;
      }

      return 'This is required';
    };

    return {
      isRequired,
    };
  },
};
</script>