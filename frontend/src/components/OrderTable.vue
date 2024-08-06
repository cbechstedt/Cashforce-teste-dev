<template>
  <table>
    <thead>
      <tr>
        <th>Nota Fiscal</th>
        <th>Sacado</th>
        <th>Cedente</th>
        <th>Emissão</th>
        <th>Valor</th>
        <th>Status</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in orders" :key="order.notaFiscal">
        <td>{{ order.notaFiscal }}</td>
        <td>{{ order.sacado }}</td>
        <td>{{ order.cedente }}</td>
        <td>{{ formatDate(order.emissao) }}</td>
        <td class="value">{{ formatCurrency(order.valor) }}</td>
        <td :class="{'status-confirmed': order.status === 'Confirmado', 'status-pending': order.status === 'Pendente'}">{{ order.status }}</td>
        <td><button @click="showCedenteData(order.cedente)" class="cedente-button">Dados do Cedente</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      orders: []
    };
  },
  created() {
    this.fetchOrders();
  },
  methods: {
    fetchOrders() {
      fetch('http://localhost:3000/api/orders')
        .then(response => response.json())
        .then(data => {
          this.orders = data;
        })
        .catch(error => {
          console.error('Error fetching orders:', error);
        });
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
    formatCurrency(value) {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value / 100);
    },
    showCedenteData(cedente) {
      alert(`Dados do Cedente: ${cedente}`);
    }
  }
};
</script>

<style>
table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
}

th, td {
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.value {
  color: green;
}

.status-confirmed {
  color: green;
}

.status-pending {
  color: yellow;
}

.cedente-button {
  padding: 5px 10px;
  cursor: pointer;
  border: 1px solid blue;
  border-radius: 5px;
  background-color: white;
  color: blue;
}
</style>
