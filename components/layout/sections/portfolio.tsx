"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingCart, Eye, Heart, ChevronDown } from "lucide-react";
import { useState, useMemo } from "react";

type Product = {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  imageUrl: string;
  isNew?: boolean;
  isFeatured?: boolean;
  installments?: string;
};

const products: Product[] = [
  {
    id: "cuia-gelo",
    title: "CUIA GELO COMPANY",
    price: "R$30,00",
    imageUrl: "/gelo-card.jpg",
    isFeatured: true,
  },
  {
    id: "slick-vidro",
    title: "Slick vidro GELONALDO com divisória 9ml",
    price: "R$45,00",
    imageUrl: "/gelo-card.jpg",
  },
  {
    id: "kit-cremeiro-2",
    title: "Kit CREMEIRO 2",
    price: "R$70,00",
    installments: "2 x de R$35,00 sem juros",
    imageUrl: "/gelo-card.jpg",
    isNew: true,
  },
  {
    id: "anti-rato",
    title: "ANTI-RATO BIC GELO",
    price: "R$35,00",
    imageUrl: "/gelo-card.jpg",
  },
  {
    id: "kit-cremeiro-3",
    title: "Kit CREMEIRO 3",
    price: "R$75,00",
    installments: "3 x de R$25,00 sem juros",
    imageUrl: "/gelo-card.jpg",
  },
  {
    id: "cartela-adesivos-small",
    title: "Cartela de adesivos GELO Small",
    price: "R$12,00",
    imageUrl: "/gelo-card.jpg",
    isNew: true,
  },
  {
    id: "cartela-adesivos-media",
    title: "Cartela de adesivos V1.1 MEDIA",
    price: "R$18,00",
    imageUrl: "/gelo-card.jpg",
  },
  {
    id: "copao-gelo",
    title: "Copão GELO COMPANY 500 ML",
    price: "R$40,00",
    imageUrl: "/gelo-card.jpg",
    isFeatured: true,
  },
  {
    id: "moletom-gelo-classic",
    title: "Moletom GELO Classic",
    price: "R$120,00",
    originalPrice: "R$150,00",
    imageUrl: "/gelo-card.jpg",
    installments: "4 x de R$30,00 sem juros",
    isNew: true,
  },
  {
    id: "camiseta-gelo-logo",
    title: "Camiseta GELO Logo Azul",
    price: "R$65,00",
    imageUrl: "/gelo-card.jpg",
    isFeatured: true,
  },
  {
    id: "boné-gelo-premium",
    title: "Boné GELO Premium Snapback",
    price: "R$49,90",
    imageUrl: "/gelo-card.jpg",
  },
  {
    id: "caneca-gelo-350ml",
    title: "Caneca GELO 350ML",
    price: "R$25,00",
    imageUrl: "/gelo-card.jpg",
  },
  {
    id: "caderno-gelo-universitario",
    title: "Caderno GELO Universitário 10 Matérias",
    price: "R$32,50",
    imageUrl: "/gelo-card.jpg",
    installments: "2 x de R$16,25 sem juros",
  },
  {
    id: "pin-gelo-metalizado",
    title: "Pin GELO Metalizado",
    price: "R$8,90",
    imageUrl: "/gelo-card.jpg",
  },
  {
    id: "chaveiro-gelo-emborrachado",
    title: "Chaveiro GELO Emborrachado",
    price: "R$12,50",
    imageUrl: "/gelo-card.jpg",
  },
  {
    id: "garrafa-termica-gelo",
    title: "Garrafa Térmica GELO 500ML",
    price: "R$89,90",
    imageUrl: "/gelo-card.jpg",
    installments: "3 x de R$29,97 sem juros",
    isNew: true,
  },
  {
    id: "mousepad-gelo-pro",
    title: "Mousepad GELO Pro Gaming",
    price: "R$39,90",
    imageUrl: "/gelo-card.jpg",
  },
  {
    id: "capa-iphone-gelo",
    title: "Capa iPhone GELO Protection",
    price: "R$45,00",
    imageUrl: "/gelo-card.jpg",
  },
  {
    id: "fone-bluetooth-gelo",
    title: "Fone Bluetooth GELO Beats",
    price: "R$199,90",
    originalPrice: "R$249,90",
    imageUrl: "/gelo-card.jpg",
    installments: "10 x de R$19,99 sem juros",
    isFeatured: true,
  },
  {
    id: "meias-gelo-pack",
    title: "Pack 3 Meias GELO Socks",
    price: "R$35,90",
    imageUrl: "/gelo-card.jpg",
  },
  {
    id: "oculos-sol-gelo",
    title: "Óculos de Sol GELO Summer",
    price: "R$75,00",
    imageUrl: "/gelo-card.jpg",
    installments: "2 x de R$37,50 sem juros",
  },
  {
    id: "pochete-gelo-neon",
    title: "Pochete GELO Neon",
    price: "R$55,00",
    imageUrl: "/gelo-card.jpg",
    isNew: true,
  },
  {
    id: "lancheira-termica-gelo",
    title: "Lancheira Térmica GELO",
    price: "R$65,00",
    imageUrl: "/gelo-card.jpg",
  },
  {
    id: "necessaire-gelo-viagem",
    title: "Necessaire GELO Viagem",
    price: "R$38,00",
    imageUrl: "/gelo-card.jpg",
  },
  {
    id: "jogo-copos-shot-gelo",
    title: "Jogo de 6 Copos Shot GELO",
    price: "R$45,00",
    imageUrl: "/gelo-card.jpg",
  },
  {
    id: "caixa-som-gelo-bluetooth",
    title: "Caixa de Som GELO Bluetooth",
    price: "R$149,90",
    imageUrl: "/gelo-card.jpg",
    installments: "5 x de R$29,98 sem juros",
    isFeatured: true,
  },
  {
    id: "power-bank-gelo-10000",
    title: "Power Bank GELO 10000mAh",
    price: "R$89,90",
    imageUrl: "/gelo-card.jpg",
    installments: "3 x de R$29,97 sem juros",
  },
  {
    id: "almofada-gelo-decorativa",
    title: "Almofada Decorativa GELO",
    price: "R$49,90",
    imageUrl: "/gelo-card.jpg",
  },
  {
    id: "toalha-praia-gelo",
    title: "Toalha de Praia GELO Summer",
    price: "R$59,90",
    imageUrl: "/gelo-card.jpg",
    isNew: true,
  },
  {
    id: "chinelo-gelo-summer",
    title: "Chinelo GELO Summer",
    price: "R$35,00",
    imageUrl: "/gelo-card.jpg",
  },
  {
    id: "agenda-gelo-2023",
    title: "Agenda GELO 2023",
    price: "R$29,90",
    imageUrl: "/gelo-card.jpg",
  },
  {
    id: "kit-canetas-gelo",
    title: "Kit 5 Canetas Coloridas GELO",
    price: "R$22,50",
    imageUrl: "/gelo-card.jpg",
  },
  {
    id: "squeeze-gelo-750ml",
    title: "Squeeze GELO 750ML",
    price: "R$35,00",
    imageUrl: "/gelo-card.jpg",
  },
  {
    id: "mochila-gelo-laptop",
    title: "Mochila GELO para Laptop",
    price: "R$129,90",
    originalPrice: "R$159,90",
    imageUrl: "/gelo-card.jpg",
    installments: "4 x de R$32,48 sem juros",
    isFeatured: true,
  },
  {
    id: "porta-copos-gelo-set",
    title: "Set 4 Porta-Copos GELO",
    price: "R$19,90",
    imageUrl: "/gelo-card.jpg",
  },
  {
    id: "guarda-chuva-gelo",
    title: "Guarda-Chuva GELO Automático",
    price: "R$45,00",
    imageUrl: "/gelo-card.jpg",
  },
  {
    id: "carregador-wireless-gelo",
    title: "Carregador Wireless GELO 15W",
    price: "R$79,90",
    imageUrl: "/gelo-card.jpg",
    installments: "2 x de R$39,95 sem juros",
    isNew: true,
  },
  {
    id: "suporte-celular-gelo",
    title: "Suporte para Celular GELO Car",
    price: "R$29,90",
    imageUrl: "/gelo-card.jpg",
  },
  {
    id: "luminaria-led-gelo",
    title: "Luminária LED GELO",
    price: "R$69,90",
    imageUrl: "/gelo-card.jpg",
    installments: "2 x de R$34,95 sem juros",
  },
  {
    id: "organizador-cabos-gelo",
    title: "Organizador de Cabos GELO",
    price: "R$15,90",
    imageUrl: "/gelo-card.jpg",
  },
  {
    id: "pen-drive-gelo-32gb",
    title: "Pen Drive GELO 32GB",
    price: "R$39,90",
    imageUrl: "/gelo-card.jpg",
  },
  {
    id: "relogio-mesa-gelo",
    title: "Relógio de Mesa GELO Digital",
    price: "R$49,90",
    imageUrl: "/gelo-card.jpg",
  },
  {
    id: "coletor-gelo-premium",
    title: "Coletor de Gelo Premium Inox",
    price: "R$75,00",
    imageUrl: "/gelo-card.jpg",
    installments: "2 x de R$37,50 sem juros",
    isFeatured: true,
  },
  {
    id: "forma-gelo-silicone",
    title: "Forma de Gelo Silicone GELO Esferas",
    price: "R$25,00",
    imageUrl: "/gelo-card.jpg",
    isNew: true,
  },
  {
    id: "kit-forma-gelo-frutas",
    title: "Kit Forma de Gelo Frutas",
    price: "R$32,50",
    imageUrl: "/gelo-card.jpg",
  },
  {
    id: "pinça-gelo-profissional",
    title: "Pinça para Gelo Profissional GELO",
    price: "R$28,90",
    imageUrl: "/gelo-card.jpg",
  },
  {
    id: "balde-gelo-acrilico",
    title: "Balde de Gelo Acrílico GELO",
    price: "R$59,90",
    imageUrl: "/gelo-card.jpg",
    installments: "2 x de R$29,95 sem juros",
  },
  {
    id: "cooler-gelo-portatil",
    title: "Cooler Portátil GELO 15L",
    price: "R$120,00",
    originalPrice: "R$150,00",
    imageUrl: "/gelo-card.jpg",
    installments: "4 x de R$30,00 sem juros",
    isFeatured: true,
  },
  {
    id: "lata-termica-gelo",
    title: "Lata Térmica GELO 350ml",
    price: "R$32,90",
    imageUrl: "/gelo-card.jpg",
  },
  {
    id: "quebrador-gelo-manual",
    title: "Quebrador de Gelo Manual GELO",
    price: "R$45,00",
    imageUrl: "/gelo-card.jpg",
  }
];

// Pagination, filter and sort types
type FilterType = 'all' | 'new' | 'featured';
type SortType = 'relevance' | 'price-asc' | 'price-desc';

export function PortfolioSection() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Increased from 8 to 12 for better grid display
  
  // Filter and sort state
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [sortOrder, setSortOrder] = useState<SortType>('relevance');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Filter products based on activeFilter
  const filteredProducts = useMemo(() => {
    switch(activeFilter) {
      case 'new':
        return products.filter(product => product.isNew);
      case 'featured':
        return products.filter(product => product.isFeatured);
      default:
        return products;
    }
  }, [activeFilter]);

  // Sort filtered products
  const sortedProducts = useMemo(() => {
    const productsCopy = [...filteredProducts];
    
    switch(sortOrder) {
      case 'price-asc':
        return productsCopy.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[^0-9,]/g, '').replace(',', '.'));
          const priceB = parseFloat(b.price.replace(/[^0-9,]/g, '').replace(',', '.'));
          return priceA - priceB;
        });
      case 'price-desc':
        return productsCopy.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[^0-9,]/g, '').replace(',', '.'));
          const priceB = parseFloat(b.price.replace(/[^0-9,]/g, '').replace(',', '.'));
          return priceB - priceA;
        });
      default:
        return productsCopy;
    }
  }, [filteredProducts, sortOrder]);

  // Paginate products
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedProducts.slice(startIndex, endIndex);
  }, [sortedProducts, currentPage, itemsPerPage]);

  // Calculate total pages
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  // Generate page numbers array for pagination
  const pageNumbers = useMemo(() => {
    const pages = [];
    // Show max 5 page numbers
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    // Adjust if we're at the end
    if (endPage - startPage + 1 < maxVisiblePages && startPage > 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }, [totalPages, currentPage]);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      // Scroll to top of product section
      document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="produtos" className="relative py-20 sm:py-28 overflow-hidden bg-gray-50 dark:bg-gray-900/50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-[0.05]">
        <Image
          src="/ice-pattern.png"
          alt=""
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      <div className="container px-4 mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium text-[#29ABE2] uppercase tracking-wider mb-2">
            Nossa Loja
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Produtos <span className="text-[#29ABE2]">GELO</span>
          </h3>
          <div className="w-24 h-1 bg-[#29ABE2] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Conheça nossa linha exclusiva de produtos. Qualidade, estilo e funcionalidade para você.
          </p>
        </div>

        {/* Filter/sort options */}
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div className="flex space-x-2">
            <Button 
              variant={activeFilter === 'all' ? 'default' : 'outline'} 
              size="sm" 
              className={`text-xs ${activeFilter === 'all' ? 'bg-[#29ABE2] hover:bg-[#29ABE2]/90' : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
              onClick={() => {
                setActiveFilter('all');
                setCurrentPage(1);
              }}
            >
              Todos
            </Button>
            <Button 
              variant={activeFilter === 'new' ? 'default' : 'ghost'} 
              size="sm" 
              className={`text-xs ${activeFilter === 'new' ? 'bg-[#29ABE2] hover:bg-[#29ABE2]/90' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
              onClick={() => {
                setActiveFilter('new');
                setCurrentPage(1);
              }}
            >
              Novidades
            </Button>
            <Button 
              variant={activeFilter === 'featured' ? 'default' : 'ghost'} 
              size="sm" 
              className={`text-xs ${activeFilter === 'featured' ? 'bg-[#29ABE2] hover:bg-[#29ABE2]/90' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
              onClick={() => {
                setActiveFilter('featured');
                setCurrentPage(1);
              }}
            >
              Mais Vendidos
            </Button>
          </div>
          
          <div className="flex items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">Ordenar por:</span>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md px-4 py-2 min-w-[160px] text-sm font-medium transition-all hover:border-[#29ABE2] focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/20"
              >
                <span>
                  {sortOrder === 'relevance' && 'Relevância'}
                  {sortOrder === 'price-asc' && 'Menor preço'}
                  {sortOrder === 'price-desc' && 'Maior preço'}
                </span>
                <ChevronDown 
                  size={16} 
                  className={`ml-2 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-[#29ABE2]' : ''}`} 
                />
              </button>
              
              {isDropdownOpen && (
                <>
                  {/* Overlay to detect clicks outside the dropdown */}
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setIsDropdownOpen(false)}
                  />
                  
                  <div className="absolute right-0 mt-1 z-20 w-[180px] rounded-md border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg py-1 animate-in fade-in zoom-in-95 duration-100">
                    <button
                      onClick={() => {
                        setSortOrder('relevance');
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center justify-between ${sortOrder === 'relevance' ? 'text-[#29ABE2] font-medium' : ''}`}
                    >
                      Relevância
                      {sortOrder === 'relevance' && (
                        <div className="h-2 w-2 rounded-full bg-[#29ABE2]" />
                      )}
                    </button>
                    
                    <button
                      onClick={() => {
                        setSortOrder('price-asc');
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center justify-between ${sortOrder === 'price-asc' ? 'text-[#29ABE2] font-medium' : ''}`}
                    >
                      Menor preço
                      {sortOrder === 'price-asc' && (
                        <div className="h-2 w-2 rounded-full bg-[#29ABE2]" />
                      )}
                    </button>
                    
                    <button
                      onClick={() => {
                        setSortOrder('price-desc');
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center justify-between ${sortOrder === 'price-desc' ? 'text-[#29ABE2] font-medium' : ''}`}
                    >
                      Maior preço
                      {sortOrder === 'price-desc' && (
                        <div className="h-2 w-2 rounded-full bg-[#29ABE2]" />
                      )}
                    </button>
                  </div>
                </>
              )}
              <div className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#29ABE2] scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 min-h-[600px]">
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product) => (
              <div 
                key={product.id}
                className="group relative"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  {/* Product image container with badges and action buttons */}
                  <div className="relative pt-[100%]"> {/* 1:1 aspect ratio */}
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Overlay that appears on hover */}
                    <div 
                      className={`absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    >
                      <div className="flex gap-2">
                        <Button 
                          size="icon"
                          className="rounded-full bg-white text-gray-800 hover:bg-[#29ABE2] hover:text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                        >
                          <Eye size={18} />
                        </Button>
                        <Button 
                          size="icon"
                          className="rounded-full bg-white text-gray-800 hover:bg-[#29ABE2] hover:text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75"
                        >
                          <Heart size={18} />
                        </Button>
                        <Button 
                          size="icon"
                          className="rounded-full bg-white text-gray-800 hover:bg-[#29ABE2] hover:text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150"
                          asChild
                        >
                          <Link href={`https://wa.me/5585991124238?text=Olá! Tenho interesse no produto ${product.title}`}>
                            <ShoppingCart size={18} />
                          </Link>
                        </Button>
                      </div>
                    </div>
                    
                    {/* Product badges */}
                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                      {product.isNew && (
                        <span className="bg-green-500 text-white text-xs font-bold py-1 px-2 rounded-md">
                          NOVO
                        </span>
                      )}
                      {product.isFeatured && (
                        <span className="bg-[#29ABE2] text-white text-xs font-bold py-1 px-2 rounded-md">
                          DESTAQUE
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Product info */}
                  <div className="px-4 py-4 flex-1 flex flex-col">
                    <h3 className="font-medium text-sm sm:text-base mb-2 line-clamp-2 h-10 group-hover:text-[#29ABE2] transition-colors">
                      {product.title}
                    </h3>
                    
                    <div className="mt-auto">
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-[#29ABE2]">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm line-through text-gray-400">{product.originalPrice}</span>
                        )}
                      </div>
                      
                      {product.installments && (
                        <p className="text-xs text-gray-500 mt-1">{product.installments}</p>
                      )}
                      
                      <Button 
                        className="w-full mt-3 bg-[#29ABE2] hover:bg-[#29ABE2]/80 text-white group relative overflow-hidden"
                        asChild
                      >
                        <Link href={`https://wa.me/5585991124238?text=Olá! Tenho interesse no produto ${product.title}`}>
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            Comprar <ShoppingCart size={16} />
                          </span>
                          <span className="absolute inset-0 bg-gradient-to-r from-[#29ABE2]/0 via-[#29ABE2] to-[#29ABE2]/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <p className="text-gray-500 dark:text-gray-400">Nenhum produto encontrado com os filtros selecionados.</p>
              <Button 
                variant="link" 
                className="text-[#29ABE2] hover:text-[#29ABE2]/80 mt-2"
                onClick={() => {
                  setActiveFilter('all');
                  setSortOrder('relevance');
                  setCurrentPage(1);
                }}
              >
                Limpar filtros
              </Button>
            </div>
          )}
        </div>
        
        {/* Pagination - only show if we have products and more than one page */}
        {paginatedProducts.length > 0 && totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <div className="flex flex-wrap gap-1 items-center">
              <Button 
                size="icon" 
                variant="outline" 
                className="w-8 h-8 hover:bg-[#29ABE2]/10 hover:text-[#29ABE2] hover:border-[#29ABE2]"
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
              >
                <span className="sr-only">First page</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17-5-5 5-5M17 17l-5-5 5-5"/></svg>
              </Button>
              
              <Button 
                size="icon" 
                variant="outline" 
                className="w-8 h-8 hover:bg-[#29ABE2]/10 hover:text-[#29ABE2] hover:border-[#29ABE2]"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <span className="sr-only">Previous page</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </Button>
              
              {/* Show page numbers */}
              {pageNumbers.map(number => (
                <Button 
                  key={number}
                  size="sm" 
                  variant={currentPage === number ? 'default' : 'ghost'}
                  className={currentPage === number ? 'bg-[#29ABE2] hover:bg-[#29ABE2]/90' : 'hover:bg-[#29ABE2]/10 hover:text-[#29ABE2]'}
                  onClick={() => handlePageChange(number)}
                >
                  {number}
                </Button>
              ))}
              
              <Button 
                size="icon" 
                variant="outline" 
                className="w-8 h-8 hover:bg-[#29ABE2]/10 hover:text-[#29ABE2] hover:border-[#29ABE2]"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <span className="sr-only">Next page</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </Button>
              
              <Button 
                size="icon" 
                variant="outline" 
                className="w-8 h-8 hover:bg-[#29ABE2]/10 hover:text-[#29ABE2] hover:border-[#29ABE2]"
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
              >
                <span className="sr-only">Last page</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m13 17 5-5-5-5M7 17l5-5-5-5"/></svg>
              </Button>
            </div>
          </div>
        )}
        
        {/* Results count */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
          Mostrando {paginatedProducts.length} de {sortedProducts.length} produtos
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-bold mb-4">Não encontrou o que procura?</h3>
          <Button
            asChild
            className="bg-[#29ABE2] hover:bg-[#29ABE2]/90 text-white rounded-md px-8 py-6 group"
          >
            <Link
              href="https://wa.me/5585991124238"
              className="flex items-center text-sm tracking-wider"
            >
              CONTATE-NOS VIA WHATSAPP
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
