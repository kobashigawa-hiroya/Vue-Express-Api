<template>
  <h4>Vee-Validateでフォームバリデーション</h4>
  <a href="https://reffect.co.jp/vue/veevaliate4" target="_blank">参照先</a><br>
  name:<input type="text" v-model="name" />
  <p>{{ name }}</p><p>{{ errors.name }}</p>
  email:<input type="text" v-model="email"/>
  <p>{{ email }}</p><p>{{ errors.email }}</p>
  <p>valid:{{ meta.valid }}</p>
  <p>dirty:{{ meta.dirty }}</p>
  <p>initialValue:{{ meta.initialValue }}</p>
  <pre>


<strong>useFieldのメタデータ</strong>
useFiledから戻されるオブジェクトの中にはメタデータが含まれています。

メタデータって？と疑問に思う人も多いかと思うのでメタデータにはどのような値が入っており、
入力フォームとどうような関係があるのか確認していきましょう。

metaにはvalid, touched, dirty, pending, initialValueが含まれています。
ブラウザ上に各値を表示させ入力によってどのような変化があるのか確認していきます。

・ブラウザで確認するとvalidとdirtyの値はfalseでinitialValueには何も入っていません。
・メタデータの初期値を確認
input要素に文字を入力します。1文字入れた瞬間にバリデーションのエラーが表示されますが
それと一緒にdirtyの値がfalseからtrueになることが確認できます。
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
      name: yup.string().required('名前は、必須の項目です。'),
      email: yup.string().required('必須の項目です。').
              email('メールアドレスの形式ではありません。'),
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
<strong>&lt;p&gt;valid:｛｛  meta.valid ｝｝&lt;/p&gt;
&lt;p&gt;dirty:｛｛  meta.dirty ｝｝&lt;/p&gt;
&lt;p&gt;initialValue:｛｛  meta.initialValue ｝｝&lt;/p&gt;</strong>


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

    const { errors } = useForm({
      validationSchema: schema,
    });

    const { value: name } = useField('name');
    const { value: email, <strong>meta</strong> } = useField('email' <strong>, undefined, {
          initialValue: 'john@test.com',
          });</strong>

    return {
      name,
      email,
      errors,
      meta,
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
import { useField, useForm } from 'vee-validate';
import { object, string } from 'yup';
export default {
  setup() {
    const schema = object({
      name: string().required(),
      email: string()
        .required()
        .email(),
    });

    const { errors } = useForm({
      validationSchema: schema,
    });

    const { value: name } = useField('name');
    const { value: email, meta } = useField('email', undefined, {
          initialValue: 'john@test.com',
          });

    return {
      name,
      email,
      errors,
      meta,
    };
  },
};</script>