import 'package:flutter/material.dart';

class MyResponsiveBuilder extends StatelessWidget {
  const MyResponsiveBuilder(this.builder, {Key? key}) : super(key: key);

  final Widget? Function(
    BuildContext context,
    bool isSmall,
    bool isMedium,
    bool isLarge,
  ) builder;

  @override
  Widget build(BuildContext context) {
    final double width = MediaQuery.of(context).size.width;

    bool isSmall = width <= 640;
    bool isMedium = width > 640 && width < 1008;
    bool isLarge = width >= 1008;

    final Widget? widget = builder(context, isSmall, isMedium, isLarge);

    if (widget == null) {
      return const SizedBox.shrink();
    } else {
      return widget;
    }
  }
}
