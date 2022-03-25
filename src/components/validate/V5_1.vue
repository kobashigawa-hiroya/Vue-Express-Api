<template>
  <h4>Vee-Validateでフォームバリデーション</h4>
  <a href="https://reffect.co.jp/vue/veevaliate4" target="_blank">参照先</a><br>
    <Form :validation-schema="schema">
      <div><Field name="name" /></div>
      <ErrorMessage name="name" as="div" />
      <div><Field name="email" /></div>
      <ErrorMessage name="email" as="div" />
    </Form>

<pre>

<strong>バリデーションスキーマ</strong>
先程はisRequired関数でバリデーションを行っていきましたが
複数のinput要素、yup, バリデーションスキーマを利用してコードの書き換えを行います。
ErrorMessageコンポーネントではデフォルトではspanタグなので
as=”div”によりspanタグからdivタグに変更することができます
</pre>

<table>
  <tr>
    <td>
<pre>
&lt;Form&gt;
  &lt;Field name="name" :rules="isRequired" /&gt;
  &lt;ErrorMessage name="name" /&gt;
&lt;/Form&gt;




&lt;script&gt;
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

&lt;/script&gt;

</pre>
    </td>

    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ーー＞&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td>

<pre>
  &lt;Form <strong>:validation-schema="schema"</strong>&gt;
    <strong>&lt;div&gt;&lt;Field name="name" /&gt;&lt;/div&gt;
    &lt;ErrorMessage name="name" as="div" /&gt;
    &lt;div&gt;&lt;Field name="email" /&gt;&lt;/div&gt;
    &lt;ErrorMessage name="email" as="div" /&gt;</strong>
  &lt;/Form&gt;

&lt;script&gt;
import { Field, Form, ErrorMessage } from 'vee-validate';
<strong>import * as yup from 'yup';</strong>

export default {
  components: { Field, Form, ErrorMessage },
  setup() {
    <strong>const schema = yup.object({
      name: yup.string().required(),
      email: yup.string().required().email(),
    });</strong>

    return {
      <strong>schema,</strong>
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
      email: yup.string().required().email(),
    });
    return {
      schema,
    };
  },
};
</script>