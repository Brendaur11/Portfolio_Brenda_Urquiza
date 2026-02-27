export const projects = [
  {
    id: 1,
    slug: 'sistema-gestion-ventas',
    title: 'Sistema de Gestión de Ventas',
    tagline: 'Plataforma interna para gestión de clientes, productos y operaciones comerciales.',
    type: 'Sistema Web',
    status: 'En desarrollo activo',
    featured: true,
    problem:
      'Las PyMEs manejan su operación comercial en hojas de cálculo fragmentadas, sin trazabilidad de ventas, sin visibilidad en tiempo real del stock ni historial unificado de clientes.',
    solution:
      'Sistema modular con separación clara de responsabilidades: gestión de entidades (clientes, productos), motor de ventas con cálculo de totales y descuentos, y panel de métricas operativas.',
    architecture:
      'Frontend en React con Context API para estado global. Backend en Node.js + Express con arquitectura en capas (routes → controllers → services → repositories). Base de datos PostgreSQL con migraciones versionadas.',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'JWT'],
    decisions: [
      'Separación de lógica de negocio en la capa de servicios para facilitar testing unitario.',
      'Uso de repositorios como abstracción sobre la capa de datos, permitiendo cambiar el ORM sin modificar la lógica.',
      'JWT con refresh tokens para autenticación stateless escalable.',
      'Context API en lugar de Redux para reducir boilerplate en un sistema de tamaño medio.',
    ],
    nextSteps: [
      'Integración con AFIP para facturación electrónica.',
      'Dashboard de reportes con gráficos históricos.',
      'API pública documentada con Swagger.',
      'Testing E2E con Cypress.',
    ],
    dataModel: [
      { entity: 'Usuario', fields: 'id, nombre, email, rol, created_at' },
      { entity: 'Cliente', fields: 'id, razon_social, cuit, email, telefono, direccion' },
      { entity: 'Producto', fields: 'id, nombre, sku, precio, stock, categoria_id' },
      { entity: 'Venta', fields: 'id, cliente_id, usuario_id, total, descuento, estado, fecha' },
      { entity: 'DetalleVenta', fields: 'id, venta_id, producto_id, cantidad, precio_unitario' },
    ],
    flow: [
      'Autenticación → Validación JWT → Asignación de permisos por rol.',
      'Creación de venta → Selección de cliente → Agregar ítems → Aplicar descuentos → Confirmar.',
      'Confirmación → Reducción de stock → Registro en historial → Generación de comprobante.',
    ],
    github: 'https://github.com/brenda',
    demo: null,
  },
  {
    id: 2,
    slug: 'api-autenticacion',
    title: 'API de Autenticación con Roles',
    tagline: 'Microservicio de auth con JWT, refresh tokens y control de acceso por roles.',
    type: 'Backend / API',
    status: 'Completado',
    featured: false,
    problem:
      'Necesidad de un sistema de autenticación reutilizable, seguro y desacoplado que pueda integrarse con múltiples aplicaciones del ecosistema.',
    solution:
      'Microservicio independiente con endpoints de registro, login, refresh y revocación de tokens. RBAC para control granular de recursos.',
    architecture:
      'Node.js + Express en arquitectura de capas. Tokens almacenados con hash en PostgreSQL. Middleware de autorización reutilizable.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'bcrypt'],
    decisions: [
      'Refresh tokens con rotación para mitigar robo de sesión.',
      'Hash de tokens en DB para evitar exposición directa.',
      'Middleware de roles desacoplado, aplicable a cualquier ruta.',
    ],
    nextSteps: [
      'OAuth2 con providers externos (Google, GitHub).',
      'Rate limiting por IP para prevención de brute force.',
      'Audit log de accesos.',
    ],
    dataModel: [
      { entity: 'Usuario', fields: 'id, email, password_hash, rol, activo' },
      { entity: 'RefreshToken', fields: 'id, usuario_id, token_hash, expires_at, revoked' },
      { entity: 'AuditLog', fields: 'id, usuario_id, accion, ip, timestamp' },
    ],
    flow: [
      'Login → Validación de credenciales → Emisión de access + refresh token.',
      'Request protegida → Verificación de JWT → Check de rol → Respuesta.',
      'Refresh → Validación de token → Rotación → Nuevo par de tokens.',
    ],
    github: 'https://github.com/brenda',
    demo: null,
  },
  {
    id: 3,
    slug: 'dashboard-metricas',
    title: 'Dashboard de Métricas Operativas',
    tagline: 'Panel de visualización de KPIs conectado a datos del sistema de ventas.',
    type: 'Frontend',
    status: 'En desarrollo',
    featured: false,
    problem:
      'Los gerentes necesitaban visibilidad del estado operativo en tiempo real sin acceso al sistema transaccional.',
    solution:
      'Dashboard de solo lectura con gráficos de ventas, ranking de productos y alertas de stock bajo.',
    architecture:
      'React con custom hooks para fetching de datos. Componentes de visualización desacoplados de la lógica de datos. Preparado para WebSockets.',
    stack: ['React', 'Recharts', 'Tailwind CSS', 'React Router'],
    decisions: [
      'Custom hooks por dominio (useVentas, useProductos) para separar lógica de UI.',
      'Polling cada 60 segundos como solución simple antes de implementar WebSockets.',
    ],
    nextSteps: [
      'WebSockets para actualización en tiempo real.',
      'Exportación a PDF y Excel.',
      'Filtros por rango de fechas y sucursal.',
    ],
    dataModel: [
      { entity: 'MetricaVenta', fields: 'fecha, total, cantidad, cliente_id' },
      { entity: 'AlertaStock', fields: 'producto_id, stock_actual, umbral_minimo' },
    ],
    flow: [
      'Carga → Fetch paralelo de métricas → Render de widgets.',
      'Polling → Diff de datos → Actualización selectiva de componentes.',
    ],
    github: 'https://github.com/brenda',
    demo: null,
  },
]
