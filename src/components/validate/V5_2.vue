<template>
  <h4>Vee-Validateでフォームバリデーション</h4>
  <a href="https://reffect.co.jp/vue/veevaliate4" target="_blank">参照先</a><br>
    <Form @submit="onSubmit" :validation-schema="schema">
      <div><Field name="name" /></div>
      <ErrorMessage name="name" as="div" />
      <div><Field name="email" /></div>
      <ErrorMessage name="email" as="div" />
      <button type="submit">送信</button>
    </Form>

<pre>

<strong>Componentsの場合submit処理</strong>
submit処理を行いたい場合は、Formタグに@submitイベントを設定してonSubmit関数を設定します。
onSubmit関数の中で入力したデータを取得します。
</pre>

<table>
  <tr>
    <td>
<pre>

&lt;Form :validation-schema="schema"&gt;
  &lt;div&gt;&lt;Field name="name" /&gt;&lt;/div&gt;
  &lt;ErrorMessage name="name" as="div" /&gt;
  &lt;div&gt;&lt;Field name="email" /&gt;&lt;/div&gt;
  &lt;ErrorMessage name="email" as="div" /&gt;
&lt;/Form&gt;


&lt;script&gt;
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
export default {
  components: { Field, Form, ErrorMessage },
  setup() {
    const schema = yup.object({
      name: yup.string().required(),
      email: yup.string().required().email(),
    });





    return {
      schema,
    };
  },
};

&lt;/script&gt;


</pre>
    </td>

    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ーー＞&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td>

<pre>

&lt;Form <strong>@submit="onSubmit"</strong> :validation-schema="schema"&gt;
  &lt;div&gt;&lt;Field name="name" /&gt;&lt;/div&gt;
  &lt;ErrorMessage name="name" as="div" /&gt;
  &lt;div&gt;&lt;Field name="email" /&gt;&lt;/div&gt;
  &lt;ErrorMessage name="email" as="div" /&gt;
  &lt;button type="submit"&gt;送信&lt;/button&gt;
&lt;/Form&gt;

&lt;script&gt;
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
export default {
  components: { Field, Form, ErrorMessage },
  setup() {
    const schema = yup.object({
      name: yup.string().required(),
      email: yup.string().required().email(),
    });

    <strong>const onSubmit = (values) => {
      //サーバへのデータ送信などの処理
      console.log(values);
    };</strong>
    
    return {
      schema,
      <strong>onSubmit,</strong>
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
import * as yup from 'yup';
export default {
  components: { Field, Form, ErrorMessage },
  setup() {
    const schema = yup.object({
      name: yup.string().required(),
      email: yup
        .string()
        .required()
        .email(),
    });

    const onSubmit = (values) => {
      //サーバへのデータ送信などの処理
      console.log(values);
    };

    return {
      schema,
      onSubmit,
    };
  },
};
</script>