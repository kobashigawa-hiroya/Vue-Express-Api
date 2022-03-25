<template>
  <h4>Vee-Validateでフォームバリデーション</h4>
  <a href="https://reffect.co.jp/vue/veevaliate4" target="_blank">参照先</a><br>
  <input type="text" v-model="first_name" />
  <p>{{ first_name }}</p>
  <input type="text" v-model="second_name" />
  <p>{{ second_name }}</p>


<pre>
vee-validateではref関数ではなくデータを管理するためにuseField関数を利用します。

input要素を追加しref関数を利用してリアクティブデータfirst_nameを定義してv-modelの設定を行います。
ref関数を利用するためにはimportが必要です。
</pre>
<table>
  <tr>
    <td>
      <pre>
&lt;input type="text" v-model="first_name" /&gt;
&lt;p&gt;｛｛first_name｝｝&lt;/p&gt;
&lt;input type="text" v-model="second_name" /&gt;
&lt;p&gt;｛｛second_name｝｝&lt;/p&gt;

&lt;script&gt;
import { ref } from 'vue';
export default {
  setup() {
    const first_name = ref('first_name');
    const second_name = ref('second_name');
    return {
      first_name,
      second_name,
    };
  },
};
&lt;/script&gt;
      </pre>
    </td>
    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ーー＞&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td>
      <pre>


&lt;input type="text" v-model="first_name" /&gt;
&lt;p&gt;｛｛first_name｝｝&lt;/p&gt;
&lt;input type="text" v-model="second_name" /&gt;
&lt;p&gt;｛｛second_name｝｝&lt;/p&gt;

&lt;script&gt;
import { useField } from <strong>'vee-validate';</strong>
export default {
  setup() {
    const first_name = <strong>useField('first_name');</strong>
    const second_name = <strong>useField('second_name');</strong>
    return {
      first_name: <strong>first_name.value,</strong>
      second_name: <strong>second_name.value,</strong>
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
    const first_name = useField('first_name');
    const second_name = useField('second_name');
    return {
      first_name: first_name.value,
      second_name: second_name.value,
    };
  },
};
</script>