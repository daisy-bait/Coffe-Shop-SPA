import { useEffect } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useOrders } from "../../../context/OrdersContext";

const UserOrders = () => {
  const { user } = useAuth();
  const { orders, searchOrders } = useOrders();

  useEffect(() => {
    searchOrders({ username: user.username });
  }, []);

  console.log(orders);

  return (
    <div className="uk-section first-child-adjustment uk-background-secondary uk-light uk-padding-small">
      <div className="uk-container uk-container-xlarge uk-padding-small">
        <h2 className="uk-heading-line uk-text-center">
          <span>Mis Pedidos</span>
        </h2>
        <div
          className="uk-grid-small uk-grid-match uk-child-width-1-3@s"
          data-uk-grid
          data-uk-scrollspy="cls: uk-animation-slide-right-medium; target: > div; delay: 150; repeat: true"
        >
          {Array.isArray(orders) && orders.length > 0 ? (
            orders.map((order) => (
              <div key={order._id || order.id}>
                <div className="admin-blog-card">
                  <div className="uk-grid-small" data-uk-grid>
                    <div className="uk-width-1-1">
                      <h4 className="admin-card-title">
                        Pedido #{order._id?.slice(-6)}
                      </h4>
                      <p className="admin-card-info">
                        <strong>Cliente:</strong> {order.client.username}
                      </p>
                      <p className="admin-card-info">
                        <strong>Estado:</strong>{" "}
                        <span
                          className={
                            order.status === "COMPLETADO"
                              ? "admin-status-completed"
                              : order.status === "PENDIENTE"
                              ? "admin-status-pending"
                              : order.status === "CANCELADA"
                              ? "admin-status-cancelled"
                              : ""
                          }
                        >
                          {order.status}
                        </span>
                      </p>
                      <p className="admin-card-info">
                        <strong>Creada:</strong>{" "}
                        {new Date(order.createdAt).toLocaleString("es-CO")}
                        <br />
                        <strong>Modificada:</strong>{" "}
                        {new Date(order.updatedAt).toLocaleString("es-CO")}
                      </p>

                      <div className="admin-blog-excerpt">
                        <strong>Productos:</strong>
                        <ul className="admin-product-list">
                          {order.order_details?.map((detail, idx) => (
                            <li key={idx}>
                              {detail.product.name} - Cantidad:{" "}
                              {detail.quantity} - Precio Unidad: $
                              {detail.product.price.toLocaleString("es-CO")}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="admin-card-info admin-order-total">
                        <strong>Total:</strong> $
                        {order.total_price.toLocaleString("es-CO")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="uk-width-1-1 uk-text-center admin-empty-message">
              <p>
                Aún no has realizado ningún pedido. ¡Explora nuestros productos
                y haz tu primer pedido!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserOrders;
