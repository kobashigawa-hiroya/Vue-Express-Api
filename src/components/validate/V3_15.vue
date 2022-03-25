<template>
  <h4>Vee-Validateでフォームバリデーション</h4>
  <a href="https://reffect.co.jp/vue/veevaliate4" target="_blank">参照先</a><br>
  name:<input type="text" v-model="name" />
  <p>{{ name }}</p><p>{{ errors.name }}</p>
  email:<input type="text" v-model="email" @input="handleBlur" />
  <p>{{ email }}</p><p>{{ errors.email }}</p>
  <p>valid:{{ meta.valid }}</p>
  <p>dirty:{{ meta.dirty }}</p>
  <p>initialValues:{{ meta.initialValues }}</p>
  <pre>


<strong>useFormのメタデータ</strong>
useForm関数から戻されるオブジェクトにもmetaが含まれています。
useFiledとは異なり複数の要素に関するメタデータを持っているので
input要素への入力によってどのようにメタデータの値が変わるか確認します。

<strong>useFieldでは初期値はmeta.initialValueにはいっていましたが、
useFormではmeta.initinalValuesとなります。</strong>
</pre>

<table>
  <tr>
    <td>
<pre>

&lt;input type="text" v-model="name" /&gt;
&lt;p&gt;｛｛ name ｝｝&lt;/p&gt; &lt;p&gt;｛｛  errors.name ｝｝&lt;/p&gt;
&lt;input type="text" v-model="email"  @input="handleBlur"/&gt;
&lt;p&gt;｛｛ email ｝｝&lt;/p&gt; &lt;p&gt;｛｛ errors.email ｝｝&lt;/p&gt;
&lt;p&gt;valid:｛｛  meta.valid ｝｝&lt;/p&gt;
&lt;p&gt;dirty:｛｛  meta.dirty ｝｝&lt;/p&gt;
&lt;p&gt;initialValue:｛｛  meta.initialValue ｝｝&lt;/p&gt;


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
    const { value: email, meta } = useField('email');

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

    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ーー＞&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td>

<pre>
&lt;input type="text" v-model="name" /&gt;
&lt;p&gt;｛｛ name ｝｝&lt;/p&gt; &lt;p&gt;｛｛  errors.name ｝｝&lt;/p&gt;
&lt;input type="text" v-model="email"  @input="handleBlur"/&gt;
&lt;p&gt;｛｛ email ｝｝&lt;/p&gt; &lt;p&gt;｛｛ errors.email ｝｝&lt;/p&gt;
&lt;p&gt;valid:｛｛  meta.valid ｝｝&lt;/p&gt;
&lt;p&gt;dirty:｛｛  meta.dirty ｝｝&lt;/p&gt;
<strong>&lt;p&gt;initialValues:｛｛  meta.initialValues ｝｝&lt;/p&gt;</strong>


&lt;script&gt;
import { useField, useForm } from 'vee-validate';
import { object, string } from 'yup';
export default {
  setup() {
    const schema = object({
      name: string().required('名前は、必須の項目です。'),
      email: string()
        .required('必須の項目です。')
        .email('メールアドレスの形式ではありません。'),
    });

    const { errors, meta } = useForm({
      validationSchema: schema,
      initialValues: {name: '田中角栄',
                email: 'kakukei.t@aa.com',},
    });

    const { value: name } = useField('name');
    const { value: email } = useField('email');

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
      name: string().required('名前は、必須の項目です。'),
      email: string()
        .required('必須の項目です。')
        .email('メールアドレスの形式ではありません。'),
    });

    const { errors, meta } = useForm({
      validationSchema: schema,
      initialValues: {name: '田中角栄',email: 'kakukei.t@aa.com',},
    });

    const { value: name } = useField('name');
    const { value: email } = useField('email');

    return {
      name,
      email,
      errors,
      meta,
    };
  },
};
</script>